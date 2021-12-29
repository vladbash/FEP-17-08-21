import { HomeComponent } from '../components';

const HomeContainer = (props) => {
    return `<div class="home-container">
        ${HomeComponent({ title: 'Hello from HomeContainer' })}
    </div>`;
};


export default HomeContainer;