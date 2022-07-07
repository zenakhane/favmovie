import "./app"
import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import './style.css'

import playlists from './app';

window.Alpine = Alpine

Alpine.plugin(persist)

Alpine.data('movielist',playlists );



Alpine.start()