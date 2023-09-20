import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import { Flex, HeaderContainer, Tab, TabContainer } from "./Header.style";
import { SearchIcon } from "../../utils/icons";

const Header = ({ route }: { route: {} }) => {
  const [activeTab, setActiveTab] = useState("Explore");
  const navigation = useNavigation();

  // Set the active tab to the current route name on initial render.
    useEffect(() => {
        setActiveTab(route.name)
    }, [route]);

    const handleTabs = ({ path }: { path: string }) => {
        navigation.navigate(path);
    };

    return (
        <HeaderContainer>
        <Flex>
            <SearchIcon />
        </Flex>
        <TabContainer>
            <TouchableOpacity onPress={() => handleTabs({ path: "Explore" })}>
            <Tab activeTab={activeTab === "Explore"}>Explore</Tab>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTabs({ path: "Repos" })}>
            <Tab activeTab={activeTab === "Repos"}>Repositories</Tab>
            </TouchableOpacity>
        </TabContainer>
        </HeaderContainer>
    );
};

export default Header;
