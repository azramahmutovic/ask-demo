import {createSelector} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromCommunity from '../reducers/community.reducer';

export const getCommunityState = createSelector(
    fromFeature.getState,
    (state: fromFeature.State) => state.community
);

export const selectCommunityEntities = createSelector(
    getCommunityState,
    fromCommunity.selectCommunityEntities
);

export const selectCommunityIds = createSelector(
    getCommunityState,
    fromCommunity.selectCommunityIds
);

export const selectCommunityProfiles = createSelector(
    selectCommunityEntities, 
    selectCommunityIds,
    (entities, ids) => ids.map(id => entities[id])
);