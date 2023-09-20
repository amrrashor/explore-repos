import { View, Text } from  'react-native'
import { SingleRepoProps } from "../../types"
import { Container, TrendingHeader, StarsContainer, StarsCounter, TitleContainer, Divider, InfoContainer } from './SingleRepo.styled'
import { RepoIcon, StarIcon, ForkIcon } from '../../utils/icons'
import { StyledText } from '../StyledComponents.style'
import { convertTimeFormat } from '../../utils/helpers';

const SingleRepo = ({stargazers_count, full_name,description, updated_at, language ,forks , Explore, Repos} : SingleRepoProps) => {
    return (
        <Container Explore={Explore}>
            {Explore && (
                <TrendingHeader>
                    <StyledText gray>Trending repository</StyledText>
                    <StarsContainer>
                        <StarIcon />
                        <StyledText ml mr black fontS>Star</StyledText>
                        <StarsCounter>{stargazers_count}</StarsCounter>
                    </StarsContainer>
            </TrendingHeader>
            )}
            
            
            <TitleContainer>
                <RepoIcon />
                <StyledText ml cyan fontL>{full_name.substring(0, 30)}</StyledText>
            </TitleContainer>
            
            <StyledText black fontS>{description}</StyledText>
            
            <Divider />

            {Explore && (
                <InfoContainer>
                    <StyledText mr fontS black>Updated {convertTimeFormat(updated_at)}</StyledText>
                    <StyledText ml fontS black>{language}</StyledText>
                </InfoContainer>
            )}

            {Repos && (
                <InfoContainer>
                    <StyledText ml fontS black>{language}</StyledText>

                    <InfoContainer ml>
                        <StarIcon />
                        <StyledText ml2 fontS black>{stargazers_count}</StyledText>
                    </InfoContainer>

                    <InfoContainer ml>
                        <ForkIcon />
                        <StyledText ml2 fontS black>{forks}</StyledText>
                    </InfoContainer>
                </InfoContainer>
            )}
        </Container>
    )
}

export default SingleRepo