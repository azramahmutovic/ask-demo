import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromProfile from '../reducers/profile.reducer';

export const getProfileState = createSelector(
  fromFeature.getState,
  (state: fromFeature.State) =>  state.profile
);

export const selectProfileId = createSelector(
    getProfileState,
    fromProfile.selectProfileId
);

export const selectProfileEmail = createSelector(
    getProfileState,
    fromProfile.selectProfileEmail
);

export const selectProfileFirstName = createSelector(
    getProfileState,
    fromProfile.selectProfileFirstName
);

export const selectProfileLastName = createSelector(
    getProfileState,
    fromProfile.selectProfileLastName
);

export const selectProfileAnswerCount = createSelector(
    getProfileState,
    fromProfile.selectProfileAnswerCount
);

export const selectProfileLoggedIn = createSelector(
    getProfileState,
    fromProfile.selectProfileLoggedIn
);

export const selectProfileLoginFail = createSelector(
    getProfileState,
    fromProfile.selectProfileLoginFail
);