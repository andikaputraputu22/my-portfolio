import React, {Component} from 'react';
import Heronya from '../components/Heronya';
import Navbarnya from '../components/Navbarnya';

class Profile extends Component {
    render() {
        return (
            <div>
                <Navbarnya />
                <main ref="main">
                    <Heronya />
                </main>
            </div>
        )
    }
}

export default Profile;