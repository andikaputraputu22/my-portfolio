import React, {Component} from 'react';
import Aboutnya from '../components/Aboutnya';
import Heronya from '../components/Heronya';
import Navbarnya from '../components/Navbarnya';
import Servicenya from '../components/Servicenya';

class Profile extends Component {
    render() {
        return (
            <div>
                <Navbarnya />
                <main ref="main">
                    <Heronya />
                    <Aboutnya />
                    <Servicenya />
                </main>
            </div>
        )
    }
}

export default Profile;