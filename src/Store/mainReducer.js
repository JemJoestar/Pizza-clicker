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
  totalLevels: 3,
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
      if (
        state.energyStorage.ammount < Math.ceil(state.moneyPerClick.ammount / 2)
      ) {
        return;
      }
      state.money += action.payload || state.moneyPerClick.ammount;
      state.energyStorage.ammount -= Math.ceil(state.moneyPerClick.ammount / 2);
    },
    increaseEnergy: (state, action) => {
      state.energyStorage.ammount +=
        action.payload || state.energyGeneration.ammount;

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

        state.energyGeneration.ammount += action.payload;

        state.energyGeneration.level += 1;

        state.energyGeneration.price *= 1.1;

        state.energyGeneration.price =
          state.energyGeneration.level *
          25 *
          Math.ceil(state.energyGeneration.level / 15);
        state.totalLevels = calculateTotalLevels(state);
      })
      // UPGRADE MAX ENERGY
      .addCase(upgradeMaxEnergyThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(upgradeMaxEnergyThunk.fulfilled, (state, action) => {
        state.money -= state.energyStorage.price;

        state.energyStorage.maxAmmount += action.payload;

        state.energyStorage.level += 1;

        state.energyStorage.price =
          state.energyStorage.level *
          50 *
          Math.ceil(state.energyStorage.level / 15);
        state.totalLevels = calculateTotalLevels(state);
      })
      // UPGRADE MONEY|CLICK
      .addCase(upgradeMoneyPerClickThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(upgradeMoneyPerClickThunk.fulfilled, (state, action) => {
        state.money -= state.moneyPerClick.price;

        state.moneyPerClick.level += 1;

        state.moneyPerClick.ammount += action.payload;
        state.moneyPerClick.price =
          state.moneyPerClick.level *
          200 *
          Math.ceil(state.moneyPerClick.level / 15);
        state.totalLevels = calculateTotalLevels(state);
      })
      // UPGRADE MONEY|SECOND
      .addCase(upgradeMoneyPerSecondThunk.pending, (state, action) => {
        state.error = null;
      })
      .addCase(upgradeMoneyPerSecondThunk.fulfilled, (state, action) => {
        state.money -= state.moneyPerSecond.price;

        state.moneyPerSecond.ammount += action.payload;

        state.moneyPerSecond.level += 1;
        state.moneyPerSecond.price =
          state.moneyPerSecond.level *
          50 *
          Math.ceil(state.moneyPerSecond.level / 15);
        state.totalLevels = calculateTotalLevels(state);
      }),
});

function calculateTotalLevels(state) {
  return (
    state.energyGeneration.level +
    state.energyStorage.level +
    state.moneyPerSecond.level +
    state.moneyPerClick.level
  );
}

export const {
  setMoney,
  addMoney,
  increaseEnergy,
  upgradeEnergy,
  addMoneyPerSecond,
} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
