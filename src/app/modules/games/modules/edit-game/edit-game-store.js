import Router from '../../../../../router';

import {EditGameStoreKeys} from "@/app/modules/games/modules/edit-game/edit-game-store-keys";
import {editGameService} from "@/app/modules/games/modules/edit-game/edit-game-service";

export default {
  state: {
    game: null
  },
  mutations: {
    [EditGameStoreKeys.Mutations.RetrieveGameSuccess]: function(state, game) {
      state.game = game;
    },
    [EditGameStoreKeys.Mutations.RetrieveGameFailure]: function() {

    },
    [EditGameStoreKeys.Mutations.UpdateGameSuccess]: function(state, game) {
      state.game = game;
    },
    [EditGameStoreKeys.Mutations.UpdateGameFailure]: function() {

    }
  },
  actions: {
    [EditGameStoreKeys.Actions.RetrieveGame]: function({ commit }, gameId) {
      editGameService.getGame(
        gameId,
        game => commit(EditGameStoreKeys.Mutations.RetrieveGameSuccess, game),
        error => commit(EditGameStoreKeys.Mutations.RetrieveGameFailure, error)
      );
    },
    [EditGameStoreKeys.Actions.UpdateGame]: function({ commit }, game) {
      editGameService.updateGame(
        game,
        game => {
          commit(EditGameStoreKeys.Mutations.UpdateGameSuccess, game);
          Router.replace('/games/listing');
        },
        error => commit(EditGameStoreKeys.Mutations.UpdateGameFailure, error)
      )
    }
  }
};