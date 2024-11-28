#!/bin/bash

# Source the colors from _colors.sh
source ./scripts/_colors.sh

LOGO=${GREEN}  # Define your color for the logo
BACKGROUND=${NC}  # Reset color after printing

# Print the ASCII art header using echo statements with colors
echo -e "${LOGO} _____         _                                  ____                                             _       ${NC}";
echo -e "${LOGO}|_   _|__  ___| |__  _ ____      ____ _ _   _    / ___|___  _ __ ___  _ __   ___  _ __   ___ _ __ | |_ ___ ${NC}";
echo -e "${LOGO}  | |/ _ \/ __| '_ \| '_ \ \ /\ / / _\` | | | |  | |   / _ \| '_ \` _ \| '_ \ / _ \| '_ \ / _ \ '_ \| __/ __|${NC}";
echo -e "${LOGO}  | |  __/ (__| | | | | | \ V  V / (_| | |_| |  | |__| (_) | | | | | | |_) | (_) | | | |  __/ | | | |_\__ \ ${NC}";
echo -e "${LOGO}  |_|\___|\___|_| |_|_| |_|\_/\_/ \__,_|\__, |   \____\___/|_| |_| |_| .__/ \___/|_| |_|\___|_| |_|\__|___/ ${NC}";
echo -e "${LOGO}                                        |___/                        |_|                                    ${NC}";

# Print additional information using color
echo -e "${BLUE}Version: 0.1.22${NC}"
echo -e "${GREEN}Date: $(date)${NC}"
echo -e "\n"
