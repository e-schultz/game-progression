import {DashboardStoreKeys} from "@/app/modules/dashboard/dashboard-store-keys";
import {dashboardService} from "@/app/modules/dashboard/dashboard-service";

export default {
  state: {
    games: []
  },
  mutations: {
    [DashboardStoreKeys.Mutations.RetrieveDashboardGamesSuccess]: function(state, games) {
      state.games = games;
    },
    [DashboardStoreKeys.Mutations.RetrieveDashboardGamesFailure]: function() {

    },
  },
  actions: {
    [DashboardStoreKeys.Actions.RetrieveDashboardGames]: function({ commit }) {
      dashboardService.getGames(
        games => commit(DashboardStoreKeys.Mutations.RetrieveDashboardGamesSuccess, games),
        error => commit(DashboardStoreKeys.Mutations.RetrieveDashboardGamesFailure, error)
      );
    }
  }
};