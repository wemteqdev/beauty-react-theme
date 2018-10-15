
import Header from '../header';
import Footer from '../footer';

const DefaultLayout = ({component: Component, ...rest}) => {
    
    return (
      <Route {...rest} render={matchProps => (
        <div className="DefaultLayout">
          <Header/>
            <Component {...matchProps} />
          <Footer/>
        </div>
      )} />
    )
};