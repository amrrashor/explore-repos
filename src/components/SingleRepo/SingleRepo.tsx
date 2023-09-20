import { View, Text } from  'react-native'
import { SingleRepoProps } from "../../types"
import { Container, TrendingHeader, StarsContainer, StarsCounter } from './SingleRepo.styled'
import { StarIcon } from '../../utils/icons'
import { StyledText } from '../StyledComponents.style'

const SingleRepo = ({id, stargazers_count,full_name,description, updated_at, language, Explore, Repos} : SingleRepoProps) => {
    return (
        <Container>
            {Explore &&
                (<TrendingHeader>
                    <StyledText gray>Trending repository</StyledText>
                    <StarsContainer>
                        <StarIcon />
                        <StyledText ml mr black fontS>Star</StyledText>
                        <StarsCounter>{stargazers_count}</StarsCounter>
                    </StarsContainer>
                </TrendingHeader>)
            }
            
            
            <Text style={{ color: '#000' }}>{full_name}</Text>
            
            <Text style={{color:'#000'}}>{description}</Text>
            
            <View>
                <Text style={{color:'#000'}}>{updated_at}</Text>
                <Text style={{color:'#000'}}>{language}</Text>
            </View>
        </Container>
    )
}

export default SingleRepo