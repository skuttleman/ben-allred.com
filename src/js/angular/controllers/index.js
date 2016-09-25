import app from '../app';
import ApiController from './ApiController';
import BioController from './BioController';
import HomeController from './HomeController';
import MusicController from './MusicController';
import PortfolioController from './PortfolioController';

app.controller('ApiController', ApiController);
app.controller('BioController', BioController);
app.controller('HomeController', HomeController);
app.controller('MusicController', MusicController);
app.controller('PortfolioController', PortfolioController);
