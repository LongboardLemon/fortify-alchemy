import React from "react";
import { Avatar } from "@material-ui/core";

import {
    AlterationIcon, ConjurationIcon, DestructionIcon,
    IllusionIcon, MysticismIcon, RestorationIcon
} from "./icons";

const SchoolAvatar = ({ iconProps, school, ...props }) => {
    let schoolIcons = {
        Alteration: AlterationIcon,
        Conjuration: ConjurationIcon,
        Destruction: DestructionIcon,
        Illusion: IllusionIcon,
        Mysticism: MysticismIcon,
        Restoration: RestorationIcon,
    };
    let SchoolIcon = schoolIcons[school];
    if (!SchoolIcon) return null;
    return (
        <Avatar alt={school} {...props}>
            <SchoolIcon color="primary" {...iconProps} />
        </Avatar>
    );
};

export default SchoolAvatar;
