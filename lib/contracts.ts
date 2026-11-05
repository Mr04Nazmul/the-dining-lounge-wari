/** Future adapters implement these contracts. No live booking or storage is configured. */
export interface ReservationEnquiry { name:string; date:string; time:string; guests:number; occasion?:string; notes?:string; timezone:'Asia/Dhaka' }
export interface BookingReceipt { id:string; status:'pending'|'confirmed'|'declined'; createdAt:string }
export interface BookingGateway { submit(enquiry:ReservationEnquiry):Promise<BookingReceipt> }
export interface MenuEntry { id:string; name:string; category:string; price:number; currency:'BDT'; portion?:string; image?:{url:string;alt:string;sourceUrl:string}; verifiedAt:string; available:boolean }
export interface ContentRepository { getMenu():Promise<MenuEntry[]>; getGallery():Promise<{url:string;alt:string;category:string;sourceUrl:string}[]> }
// Do not implement BookingGateway in browser storage. Add a server API with validation,
// rate limiting, consent, availability checks and owner authentication before enabling it.
