import { View, Text } from  'react-native'
import { SingleRepoProps } from "../../types"
import { Container } from './SingleRepo.styled'
import { StarIcon } from '../../utils/icons'

const SingleRepo = ({id, stargazers_count,full_name,description, updated_at, language} : SingleRepoProps) => {
    return (
        <Container>
            <StarIcon />
            <Text style={{color:'#000'}}>{stargazers_count}</Text>
            <Text style={{color:'#000'}}>{full_name}</Text>
            <Text style={{color:'#000'}}>{description}</Text>
            <Text style={{color:'#000'}}>{updated_at}</Text>
            <Text style={{color:'#000'}}>{language}</Text>
        </Container>
    )
}

export default SingleRepo