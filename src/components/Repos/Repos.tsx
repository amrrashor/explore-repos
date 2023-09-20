import React, { useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native'
import { StyledText, Container } from '../StyledComponents.style';
import { fetchRepos } from '../../store/slices/repoSlice';
import SingleRepo from '../SingleRepo/SingleRepo';
import { SingleRepoProps } from '../../types';

import { useDispatch, useSelector } from 'react-redux';
const Repos = () => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repos.repos);
    const status = useSelector((state) => state.repos.status);
    const error = useSelector((state) => state.repos.error);


    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);

    if (status === 'loading') {
        return <ActivityIndicator size="large" style={{flex:1}} />;
    }

    if (status === 'failed') {
        return <StyledText black>Error: {error}</StyledText>;
    }

    const renderRepoItem = ( {item} : { item :SingleRepoProps }) => (
        <SingleRepo
        key={item.id}
        {...item}
        Repos={true}
        />
    );
    return (
        <Container>
            <StyledText black mb mt fontXL>Repositories</StyledText>
            <FlatList
                data={repos}
                renderItem={renderRepoItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => <View style={{ height: 100 }} />}
            />
        </Container>
    )
}

export default Repos