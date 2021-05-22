
const Home = () => import(/* webpackChunkName: "auth" */ '@/views/public/Home.vue')
const publicRoutes = [

	{
		path: '/',
		name: 'Home',
		component: Home ,
	},
];


export default publicRoutes;
