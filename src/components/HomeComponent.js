import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { Loading } from "./LoadingComponent"
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform } from 'react-animation-components'

const Home = props => (
    <div className='container'>
        <div className='row align-items-start'>
            <div className='col-12 col-md m-1'>
                <RenderCard item={ props.dish }
                            isLoading={ props.dishesLoading }
                            errMess={ props.dishesErrMess }/>
            </div>
            <div className='col-12 col-md m-1'>
                <RenderCard item={ props.promotion }
                            isLoading={ props.promosLoading }
                            errMess={ props.promosErrMess }/>
            </div>
            <div className='col-12 col-md m-1'>
                <RenderCard item={ props.leader }
                            isLoading={ props.leaderLoading }
                            errMess={ props.leaderErrMess }/>
            </div>
        </div>
    </div>
)

const RenderCard = ( { item, isLoading, errMess } ) => (
    isLoading ? (
        <Loading/>

    ) : errMess ? (
        <h4 className="text-danger">{ errMess }</h4>

    ) : !item ? (
        <div/>

    ) : (
        <FadeTransform
            in
            transformProps={ {
                exitTransform: 'scale(0.5) translateY(-50%)'
            } }>
            <Card>
                <CardImg top src={ baseUrl + item.image } alt={ item.name }/>
                <CardBody>
                    <CardTitle>{ item.name }</CardTitle>
                    {
                        item.designation ?
                            <CardSubtitle>{ item.designation }</CardSubtitle> :
                            null
                    }
                    <CardText>{ item.description }</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    )

)

export default Home