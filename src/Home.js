import React, {Component} from "react";
import './App.css';
import {StaggeredMotion, Motion, spring, presets} from "react-motion";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};

    }

    componentDidMount()
    {
        // console.info(window.document.getElementById("GIVI").offsetHeight);
    }

    componentWillUnmount()
    {
        window.clearTimeout(this.timeout);
    }


    render()
    {
        // alert(window.innerHeight);

        let isMobile = this.props.isMobile;

        var homeStyle = {};

        var headerImageStyle = {
            margin: 'auto',
            position: 'absolute',
            top: '66px',
            left: '0px',
            width: '100%',
            // maxHeight:'480px'
        };

        var headerImageMobileStyle = {
            margin: 'auto',
            position: 'absolute',
            top: '48px',
            left: '0px',
            height: '320px',
            width: '100%',
            objectFit: 'scale-down',
            backgroundPosition: 'center',
        };

        var welcomeStyleMobile = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '55%',
            margin: 'auto',
            textAlign: 'center',
            marginTop: '24px',
        };

        var welcomeStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '36%',
            margin: 'auto',
            textAlign: 'center',
            marginTop: this.state.imageHeight / 4,
            height: this.state.imageHeight / 1.5,
        };


        var consStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '70%',
            margin: 'auto',
            marginTop: '100px',
            marginBottom: '100px',
            paddingLeft:'24px'
        };

        var consStyleMobile = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isMobile ? '90%' : '70%',
            margin: 'auto',
            marginTop: '12px',
            marginBottom: '72px',
        };

        var conImageStyle = {
            width: '120px',
            height: '120px',
            objectFit: 'cover',
            backgroundPosition: 'center',
            marginBottom: isMobile ? '12px' : '24px',
        };

        var conTitleStyle = {
            color: '#000',
            fontSize: '140%',
            marginBottom: isMobile ? '12px' : '24px',
            fontWeight: '600'
        };

        var conTextStyle = {
            color: '#999',
            fontSize: '100%',
            textAlign: isMobile ? 'center' : 'left'
        };

        var bodyStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            padding: isMobile ? '' : '100px',
            paddingTop: isMobile ? '60px' : '120px',
            paddingBottom: isMobile ? '0px' : '10px',
            backgroundColor: '#F4F7FA'
        };

        var bodyRowStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isMobile ? '95%' : '80%',
            margin: 'auto',
            marginTop: isMobile ? '' : '-80px',
            marginBottom: isMobile ? '30px' : ''
        };

        var bodySecondRowStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isMobile ? '95%' : '80%',
            margin: 'auto',
            marginTop: isMobile ? '' : '-80px',
            marginBottom: isMobile ? '0px' : ''
        };


        var bodyItemStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'left',
            width: isMobile ? '90%' : '34%',
            textAlign: isMobile ? 'center' : 'left',
        };

        var bodyTitleStyle = {
            color: '#000',
            fontSize: '170%',
            marginBottom: '24px',
            fontWeight: '600',
            lineHeight: '1.3'
        };

        var bodyImageStyle = {
            width: isMobile ? '100%' : '58%',
            objectFit: 'cover',
            backgroundPosition: 'center',
        };

        var countsStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            padding: isMobile ? '18px' : '100px',
            paddingTop: isMobile ? '48px' : '120px',
            paddingBottom: isMobile ? '18px' : '112px',
            backgroundColor: '#FFF'
        };

        var countsTitleStyle = {
            color: '#000',
            fontSize: isMobile ? '155%' : '190%',
            marginBottom: isMobile ? '36px' : '48px',
            width: isMobile ? '100%' : '36%',
            fontWeight: '400',
            lineHeight: isMobile ? '1.3' : '1.5'
        };

        var countsRowStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isMobile ? '95%' : '80%',
            margin: 'auto',
        };

        var countsItemStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: isMobile ? '72%' : '25%',
            textAlign: 'center',
            marginBottom: isMobile ? '36px' : ''
        };

        var countsTextStyle = {
            color: '#999',
            fontSize: '110%',
            textAlign: 'center'
        };

        var joinStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-end',
            margin: 'auto',
            padding: isMobile ? '12px' : '100px',
            paddingTop: isMobile ? '48px' : '100px',
            paddingBottom: isMobile ? '48px' : '100px',
            backgroundColor: '#FF684D',
        };

        var joinButtonStyle = {
            outline: 'none',
            height: '48px',
            textAlign: 'center',
            width: isMobile ? 'calc(100% - 24px)' : '18%',
            cursor: 'pointer',
            fontSize: '100%',
            marginTop: isMobile ? '24px' : '66px',
            border: 'solid',
            borderWidth: '1px',
            borderColor: '#FFF',
            borderRadius: '2px',
            marginRight: isMobile ? '' : '18%'
        };

        let animations = [];
        animations = animations.concat("0");
        animations = animations.concat("1");
        animations = animations.concat("2");

        var that = this;
        setTimeout(() => {
            console.info(window.document.getElementById("GIVI").offsetHeight);
            that.setState({imageHeight: window.document.getElementById("GIVI").offsetHeight});
        }, 50);


        return (

            <div style={homeStyle}>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={true}
                    transitionAppearTimeout={200}
                    transitionEnterTimeout={100}
                    transitionLeaveTimeout={100}>

                    <img
                        src={isMobile ? '/portal_header_image_mobile.png' : '/portal_header_image.png'} id="GIVI"
                        alt='Atlis - Find Local Restaurants, Bars & Businesses'
                        style={isMobile ? headerImageMobileStyle : headerImageStyle}/>
                </ReactCSSTransitionGroup>

                {this.state.imageHeight === undefined ? null :
                    <div>
                        <StaggeredMotion
                            defaultStyles={animations.map(category => (
                                // noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
                                // gentle: { stiffness: 120, damping: 14 },
                                // wobbly: { stiffness: 180, damping: 12 },
                                // stiff:
                                {grow: 0, opacity: 0}
                            ))}
                            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                                    return i === 0
                                        ? {grow: spring(100, presets.noWobble), opacity: spring(1)}
                                        :
                                        {
                                            grow: spring(prevInterpolatedStyles[i - 1].grow, presets.noWobble),
                                            opacity: spring(1)
                                        };
                                }
                            )}>

                            {interpolatingStyles =>
                                <div style={isMobile ? welcomeStyleMobile : welcomeStyle}>
                                    {interpolatingStyles.map((style, i) => {
                                        var welcomeTextStyle = {
                                            color: '#FF684D',
                                            fontWeight: 'bold',
                                            fontSize: isMobile ? '160%' : '260%',

                                            WebkitTransform: `scale(${style.grow / 100})`,
                                            opacity: style.opacity
                                        };

                                        var welcomeSubtitleStyle = {
                                            color: '#000',
                                            fontSize: isMobile ? '95%' : '130%',
                                            marginTop: isMobile ? '18px' : '0px',

                                            WebkitTransform: `scale(${style.grow / 100})`,
                                            opacity: style.opacity
                                        };

                                        var askButtonStyle = {
                                            outline: 'none',
                                            height: isMobile ? '38px' : '54px',
                                            border: 'none',
                                            textAlign: 'center',
                                            width: '60%',
                                            color: '#FFF',
                                            cursor: 'pointer',
                                            fontSize: isMobile ? '95%' : '100%',
                                            marginTop: isMobile ? '18px' : '0px',

                                            borderRadius: '2px',

                                            WebkitTransform: `scale(${style.grow / 100})`,
                                            opacity: style.opacity
                                        };

                                        if (i === 0)
                                        {
                                            return (
                                                isMobile ?
                                                    <span key={i}
                                                          style={welcomeTextStyle}>Welcome to Atlis for Business</span>
                                                    :
                                                    <span
                                                        key={i}
                                                        style={welcomeTextStyle}>Welcome to <br/> Atlis for Business</span>
                                            )
                                        }
                                        if (i === 1)
                                        {
                                            return (
                                                isMobile ?
                                                    <span key={i}
                                                          style={welcomeSubtitleStyle}>A new way to connect with your customers and gain new ones.</span>
                                                    :
                                                    <span key={i}
                                                          style={welcomeSubtitleStyle}>A new way to connect with your <br/> customers and gain new ones.</span>
                                            )
                                        }
                                        if (i === 2)
                                        {
                                            return (
                                                <button onClick={this.getStarted.bind(this)}
                                                        className={style.grow == 100 ? "AskButton" : "AskButtonStatic"}
                                                        key={i}
                                                        style={askButtonStyle}>
                                                    Get Started
                                                </button>
                                            )
                                        }
                                    })}
                                </div>
                            }
                        </StaggeredMotion>


                        <StaggeredMotion
                            defaultStyles={animations.map(category => (
                                {y: 500, opacity: 0}
                            ))}
                            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                                    return i === 0
                                        ? {y: spring(0), opacity: spring(1)}
                                        :
                                        {
                                            y: spring(prevInterpolatedStyles[i - 1].y),
                                            opacity: spring(1)
                                        };
                                }
                            )}>

                            {interpolatingStyles =>
                                <div style={isMobile ? consStyleMobile : consStyle}>
                                    {interpolatingStyles.map((style, i) => {
                                        // console.info(this.state.trendingCategories[i]);

                                        var conItemStyle = {
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start',
                                            alignItems: isMobile ? 'center' : 'left',
                                            width: isMobile ? '100%' : '28%',
                                            marginTop: isMobile ? '42px' : '',
                                            WebkitTransform: `translate3d(0, ${style.y}px, 0)`,
                                            opacity: style.opacity
                                        };
                                        if (i === 0)
                                        {
                                            return (
                                                <div style={conItemStyle} key={i}>
                                                    <img
                                                        src={'/con_item_1.png'}
                                                        alt='Only Positivity' style={conImageStyle}/>
                                                    <span style={conTitleStyle}>Only Positivity</span>
                                                    <span style={conTextStyle}>Reviews are outdated. Atlis is a place for positive recommendations, not negative reviews.</span>
                                                </div>
                                            )
                                        }
                                        if (i === 1)
                                        {
                                            return (
                                                <div style={conItemStyle} key={i}>
                                                    <img
                                                        src={'/con_item_2.png'}
                                                        alt='Only Positivity' style={conImageStyle}/>
                                                    <span style={conTitleStyle}>Customer Referrals</span>
                                                    <span style={conTextStyle}>Give your customers a bigger voice and let them recommend you to anyone in your city, not just friends.</span>
                                                </div>
                                            )
                                        }
                                        if (i === 2)
                                        {
                                            return (
                                                <div style={conItemStyle} key={i}>
                                                    <img
                                                        src={'/con_item_3.png'}
                                                        alt='Only Positivity' style={conImageStyle}/>
                                                    <span style={conTitleStyle}>Engagement Tracking</span>
                                                    <span style={conTextStyle}>Offer services to interested users at the best time, even add a deal to entice them to visit.</span>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            }
                        </StaggeredMotion>

                        <div style={bodyStyle}>
                            <div style={bodyRowStyle}>
                                <div style={bodyItemStyle}>
                                    <span style={bodyTitleStyle}>Consumers nearby are asking for your services.</span>
                                    <span style={conTextStyle}>Atlis infuses word of mouth recommendations with the power to reach out to customers who have expressed interest in your business. Answer them in real time through our platform.</span>
                                </div>
                                <img
                                    src={'/body_image_1.png'}
                                    alt='Only Positivity' style={bodyImageStyle}/>
                            </div>

                            <div style={bodySecondRowStyle}>
                                <img
                                    src={'/body_image_2.png'}
                                    alt='Only Positivity' style={bodyImageStyle}/>

                                <div style={bodyItemStyle}>
                                    <span style={bodyTitleStyle}>We give you a larger audience than ever before.</span>
                                    <span style={conTextStyle}>Word-of-mouth referrals are the best. Atlis helps you keep track of the customers who recommend you the most so you can engage with them and their followers.</span>
                                </div>
                            </div>

                            <div style={bodyRowStyle}>
                                <div style={bodyItemStyle}>
                                    <span style={bodyTitleStyle}>Monitor your business and customize your ads.</span>
                                    <span style={conTextStyle}>Atlis allows you to create personalized ads directly from our website. Once live, you can track the metrics of your ad directly on your account page to see the users that are reacting to your posts and visiting your location.</span>
                                </div>

                                <img
                                    src={'/body_image_3.png'}
                                    alt='Only Positivity' style={bodyImageStyle}/>
                            </div>
                        </div>

                        <div style={countsStyle}>
                            <div style={countsTitleStyle}>20,000+ businesses are already part of the Atlis community
                            </div>

                            <div style={countsRowStyle}>
                                <div style={countsItemStyle}>
                            <span style={{
                                color: '#00CEC2',
                                fontSize: '300%',
                                marginBottom: isMobile ? '10px' : '18px',
                                fontWeight: 'bold',
                            }}>12,900</span>
                                    <span style={countsTextStyle}>Users and counting are on the Atlis platform</span>
                                </div>

                                <div style={countsItemStyle}>
                             <span style={{
                                 color: '#3674A7',
                                 fontSize: '300%',
                                 marginBottom: isMobile ? '10px' : '18px',
                                 fontWeight: 'bold',
                             }}>600</span>
                                    <span style={countsTextStyle}>Average business views daily through the app</span>
                                </div>

                                <div style={countsItemStyle}>
                             <span style={{
                                 color: '#F9C000',
                                 fontSize: '300%',
                                 marginBottom: isMobile ? '10px' : '18px',
                                 fontWeight: 'bold',
                             }}>245</span>
                                    <span style={countsTextStyle}>Average number of Asks posted per day</span>
                                </div>
                            </div>
                        </div>

                        <div style={joinStyle}>
                     <span style={{
                         color: '#FFF',
                         fontSize: isMobile ? '200%' : '300%',
                         fontWeight: 'bold',
                         width: isMobile ? '95%' : '36%',
                         textAlign: isMobile ? 'center' : 'left',
                         lineHeight: '1.3'
                     }}>Ready to join the new age of the business Ask?</span>

                            <button onClick={this.getStarted.bind(this)} className="JoinStyle" style={joinButtonStyle}>
                                Get Started
                            </button>
                        </div>
                    </div>
                }
            </div>

        );
    }

    getStarted()
    {

    }

}

Home.contextTypes = {
    router: React.PropTypes.object
};


export default Home;
