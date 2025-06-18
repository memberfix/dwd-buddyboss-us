import React from "react"
import {View} from "react-native"

import ActivityScreenNew from "./ActivityScreenNew";

export const applyCustomCode = externalCodeSetup => {
    // call custom code api here
    // externalCodeSetup.configApi.setAppSwitchEnabled(true);
    externalCodeSetup.navigationApi.replaceScreenComponent("ActivitiesScreen", () => (
        <ActivityScreenNew />
    ));
};