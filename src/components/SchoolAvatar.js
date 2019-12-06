import React from "react";
import { Avatar } from "@material-ui/core";

import {
    AlterationIcon, ConjurationIcon, DestructionIcon,
    IllusionIcon, MysticismIcon, RestorationIcon
} from "./icons";

const SchoolAvatar = ({ iconProps, school, ...props }) => {
    let avatarProps = {
        Alteration: {
            icon: AlterationIcon,
            gradient: "#9a48b4, #702587",
        },
        Conjuration: {
            icon: ConjurationIcon,
            gradient: "#897f37, #564e07",
        },
        Destruction: {
            icon: DestructionIcon,
            gradient: "#ca463a, #810805",
        },
        Illusion: {
            icon: IllusionIcon,
            gradient: "#537653, #345635",
        },
        Mysticism: {
            icon: MysticismIcon,
            gradient: "#795f7d, #513958",
        },
        Restoration: {
            icon: RestorationIcon,
            gradient: "#616ca2, #2f4072",
        },
    };
    let SchoolIcon = avatarProps[school].icon;
    if (!SchoolIcon) return null;
    return (
        <Avatar
            alt={school}
            style={{ backgroundImage: `radial-gradient(${avatarProps[school].gradient})` }}
            {...props}>
            <SchoolIcon color="primary" {...iconProps} />
        </Avatar>
    );
};

export default SchoolAvatar;
