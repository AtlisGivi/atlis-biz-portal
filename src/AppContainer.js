import React, {Component} from 'react';
import {Sticky, StickyContainer} from 'react-sticky';
import Responsive from 'react-responsive-decorator';
import {withRouter} from 'react-router'
import './App.css';

import Home from './Home';
import {Route, Switch} from 'react-router-dom'

class AppContainer extends Component
{
    constructor(props)
    {
        super(props);
        this.isMobile = null;
    }


    componentDidMount()
    {
        window.addEventListener('resize', this.handleWindowSizeChange);


        this.props.media({minWidth: 768}, () => {
            this.isMobile = false;
        });
        this.props.media({maxWidth: 768}, () => {
            this.isMobile = true;
        });

        this.forceUpdate();
    }

    componentWillUnmount()
    {
        window.clearTimeout(this.timeout);
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.props.media({minWidth: 768}, () => {
            this.isMobile = false;
        });
        this.props.media({maxWidth: 768}, () => {
            this.isScrolled = false;
            this.isMobile = true;
        });
        this.forceUpdate();
    };

    goBack()
    {
        this.context.router.history.goBack();
    }

    // componentDidUpdate(prevProps)
    // {
    //     if (this.props.location !== prevProps.location)
    //     {
    //         this.onRouteChanged();
    //     }
    // }
    // onRouteChanged()
    // {
    //     this.setScrollState(true);
    // }


    render()
    {
        if (this.isMobile === null || this.isMobile === undefined)
        {
            return null;
        }

        var screenStyle = {
            backgroundColor: '#FFF',
            textAlign: 'center',
        };

        var headerStyle = {
            backgroundColor: '#FF684D',
            height: '66px',
        };

        var stickyStyle = {
            zIndex: '9000000000000000',
            top: '0px'
        };

        var logoStyle = {
            margin: 'auto',
            position: 'relative',
            top: '50%',
            height: this.isMobile ? '21px' : '22px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
        };

        return (
            <StickyContainer style={screenStyle}>

                <Sticky stickyStyle={stickyStyle}>
                    <div style={headerStyle}>
                        <img
                            src={'/atlis_logo_ab.png'}
                            alt='Atlis - Find Local Restaurants, Bars & Businesses' style={logoStyle}/>

                    </div>
                </Sticky>

                <Switch>
                    <Route exact path='/'
                           render={(props, setFeed, clearFeed) => <Home {...props}
                                                                        isMobile={this.isMobile}/>}    // setFeed={this.setFeed.bind(this)}
                    />


                    <div>


                    </div>
                    {/*404  redirect requests that doesn't fit the URL pattern to*/}
                    <Route component={Home}/>
                </Switch>

            </StickyContainer>
        );
    }
}


AppContainer.contextTypes = {
    router: React.PropTypes.object
};

export default withRouter(Responsive(AppContainer));
