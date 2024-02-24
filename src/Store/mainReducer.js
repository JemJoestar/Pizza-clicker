import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  money: 0,
  moneyPerClick: {
    level: 1,
    ammount: 1,
    price: 200,
  },
  moneyPerSecond: {
    level: 0,
    ammount: 0,
    price: 50,
  },
  energyStorage: {
    level: 1,
    ammount: 20,
    maxAmmount: 20,
    price: 50,
  },
  energyGeneration: {
    level: 1,
    ammount: 1,
    price: 25,
  },
  error: null,
};

export const upgradeEnergyGenerationThunk = createAsyncThunk(
  'main/upgradeEnergyRegen',
  async (ammountToAdd = 0.5, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      if (state.main.money < state.main.energyGeneration.price) {
        throw new Error("You haven't got enought money");
      }
      return ammountToAdd;
    } catch (e) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const upgradeMaxEnergyThunk = createAsyncThunk(
  'main/upgradeMaxEnergy',
  async (ammountToAdd = 5, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      if (state.main.money < state.main.energyStorage.price) {
        throw new Error("You haven't got enought money");
      }
      return ammountToAdd;
    } catch (e) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const upgradeMoneyPerClickThunk = createAsyncThunk(
  'main/upgradeMoneyPerClick',
  async (ammountToAdd = 1, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      if (state.main.money < state.main.moneyPerClick.price) {
        throw new Error("You haven't got enought money");
      }
      return ammountToAdd;
    } catch (e) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const upgradeMoneyPerSecondThunk = createAsyncThunk(
  'main/upgradeMoneyPerSecond',
  async (ammountToAdd = 1, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      if (state.main.money < state.main.moneyPerSecond.price) {
        throw new Error("You haven't got enought money");
      }
      return ammountToAdd;
    } catch (e) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const mainSlice = createSlice({
  name: 'main',
  initialState: INITIAL_STATE,
  reducers: {
    setMoney: (state, action) => {
      state.money = action.payload;
    },
    addMoney: (state, action) => {
      if (state.energyStorage.ammount < state.moneyPerClick.ammount) {
        return;
      }
      state.money += action.payload || state.moneyPerClick.ammount;
      state.energyStorage.ammount -= state.moneyPerClick.ammount;
    },
    increaseEnergy: (state, action) => {
      state.energyStorage.ammount +=
        action.payload || state.energyGeneration.ammount;
      state.energyStorage.ammount = Number(
        state.energyStorage.ammount.toFixed(1)
      );
      if (state.energyStorage.ammount > state.energyStorage.maxAmmount) {
        state.energyStorage.ammount = state.energyStorage.maxAmmount;
      }
    },
    addMoneyPerSecond: (state, _) => {
      state.money += state.moneyPerSecond.ammount;
    },
  },
  extraReducers: builder =>
    builder
    // UPGRADE ENERGY GENERATION
      .addCase(upgradeEnergyGenerationThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(upgradeEnergyGenerationThunk.fulfilled, (state, action) => {
        state.money -= state.energyGeneration.price;

        state.energyGeneration.ammount = Number(
          (state.energyGeneration.ammount + action.payload).toFixed(1)
        );

        state.energyGeneration.level += 1;

        state.energyGeneration.price *= 1.1;

        state.energyGeneration.price = Number(
          state.energyGeneration.price.toFixed(0)
        );
      })
      // UPGRADE MAX ENERGY
      .addCase(upgradeMaxEnergyThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(upgradeMaxEnergyThunk.fulfilled, (state, action) => {
        state.money -= state.energyStorage.price;

        state.energyStorage.maxAmmount = Number(
          (state.energyStorage.maxAmmount + action.payload).toFixed(1)
        );

        state.energyStorage.level += 1;

        state.energyStorage.price = Number(
          (state.energyStorage.price * 1.1).toFixed(0)
        );
      })
      // UPGRADE MONEY|CLICK
      .addCase(upgradeMoneyPerClickThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(upgradeMoneyPerClickThunk.fulfilled, (state, action) => {
        state.money -= state.moneyPerClick.price;

        state.moneyPerClick.ammount += action.payload;

        state.moneyPerClick.level += 1;
        state.moneyPerClick.price = Number(
          (state.moneyPerClick.price * 1.2).toFixed(0)
        );
      })
      // UPGRADE MONEY|SECOND
      .addCase(upgradeMoneyPerSecondThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(upgradeMoneyPerSecondThunk.fulfilled, (state, action) => {
        state.money -= state.moneyPerSecond.price;

        state.moneyPerSecond.ammount += action.payload;

        state.moneyPerSecond.level += 1;
        state.moneyPerSecond.price = Number(
          (state.moneyPerSecond.price * 1.2).toFixed(0)
        );
      }),
});

export const {
  setMoney,
  addMoney,
  increaseEnergy,
  upgradeEnergy,
  addMoneyPerSecond,
} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
