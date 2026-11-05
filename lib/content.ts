export const listing = 'https://www.reserveit.com.bd/restaurant/VTJGc2RHVmtYMTlCN0pseE1CM3RHeGRKZjdMYm5KeDJINDM4WHUxa0ZQMD0=';
export const maps = 'https://www.google.com/maps/search/?api=1&query=The+Dining+Lounge+Wari+Rooftop+8%2F1+Rankin+Street+Dhaka';
export const phone = '+8801701436609';
export const gallery = [
 {id:19,category:'Interior',title:'A table beneath the blooms',alt:'Real Wari restaurant interior with teal banquettes and floral ceiling'},
 {id:14,category:'Rooftop',title:'A little closer to the sky',alt:'Wari rooftop seating with green chairs and yellow benches'},
 {id:2,category:'Food',title:'The deep-dish ritual',alt:'Deep-dish pizza photographed at The Dining Lounge Wari'},
 {id:18,category:'Interior',title:'In full bloom',alt:'Pink floral wall and seating inside the Wari restaurant'},
 {id:16,category:'Rooftop',title:'Room for a slower afternoon',alt:'Covered rooftop dining area at the Wari branch'},
 {id:10,category:'Food',title:'Made for the middle of the table',alt:'Rice and accompanying dishes from the Wari restaurant listing'},
 {id:21,category:'Interior',title:'Details worth staying for',alt:'Decorative lighting and booths at The Dining Lounge Wari'},
 {id:22,category:'Rooftop',title:'As evening arrives',alt:'Nighttime rooftop seating at the Wari restaurant'}
];
export const photo = (id:number) => `/images/${String(id).padStart(2,'0')}.webp`;
