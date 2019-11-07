import React from "react";
import { Avatar } from "@material-ui/core";

import { BeastIcon, MushroomIcon, PreciousIcon, SaltIcon } from "./icons";

const IngredientAvatar = ({ iconProps, type, ...props }) => {
    let ingredientIcons = {
        beast: BeastIcon,
        mushroom: MushroomIcon,
        precious: PreciousIcon,
        salt: SaltIcon,
    };
    let IngredientIcon = ingredientIcons[type] || SaltIcon;
    return (
        <Avatar alt={type} {...props}>
            <IngredientIcon color="primary" {...iconProps} />
        </Avatar>
    );
};

export default IngredientAvatar;
