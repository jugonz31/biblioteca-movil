import {DrawerNavigator} from 'react-navigation';

import Basica from '../components/basica';
import Avanzada from '../components/avanzada';
import Autor from '../components/autor';
import Revistas from '../components/revistas';
import Tesis_Proyectos from '../components/tesis_proyectos';
import Peliculas from '../components/peliculas';
import Musica from '../components/musica';
import Tema_Materia from '../components/tema_materia';

const DrawerScreen = DrawerNavigator({
    Basica: {screen: Basica},
    Avanzada: {screen: Avanzada},
    Autor: {screen: Autor},
    Revistas: {screen: Revistas},
    Tesis_Proyectos: {screen: Tesis_Proyectos},
    Peliculas: {screen: Peliculas},
    Musica: {screen: Musica},
    Tema_Materia: {screen: Tema_Materia},
}, {
    headerMode: 'none',
    headerStyle: {
        backgroundColor: '#0000FF',
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default DrawerScreen;