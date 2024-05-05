"use client";
export const base = {
	isType: o=> Object.prototype.toString.call(o).match(/\[object\s([a-zA-Z0-9]+)\]/)[1].toLowerCase(),
	params:{
		formatUrlSearch(url,decode = 1){
			let search = (url + '').match(/\?([^\?\#]+)/);
			search = search && search[1] || url;
			if(!search) return {};
			const params = {};
			search.split('&').forEach(v=>{
				v = (decode ? decodeURIComponent(v) : v).split('=');
				params[v[0]] = v.slice(1).join('=');
			})
			
			return params;
		},
		formatObjToUrlSearch(params, url,encode = 1,sort = 1){
			if( !['array','object'].includes(base.isType(params))  || !Object.keys(params).length ) return url || '';
			let search = Object.entries(params);
			search = sort ? search.sort((a,b)=> sort > 0 ? a[0].localeCompare(b[0]) : b[0].localeCompare(a[0])) : search;
			search = search.map(([k,v])=> `${ encode ? encodeURIComponent(k) : k }=${ encode ? encodeURIComponent(v) : v}` ).join("&");
			if(!url) return search;
			
			url+='';
			const reg = /\?([^\?\#]+)/;
			
			return url.match(reg) ? url.replace( reg, s=>{
				const oParams = base.params.formatUrlSearch(url,0);
				return `?${base.params.formatObjToUrlSearch(oParams,0)}&${search}`;
			} ) : `${url}?${search}`;
		},
		
	}
}
const router = new Proxy({
	path:'',
	fullPath: '',
	query:{},
	cb: ()=>{},
	isInit:0,
	push(obj){
		obj = base.isType(obj) === 'object' ? obj : {path: obj};
		router.path = base.params.formatObjToUrlSearch(obj.query || {},obj.path || router.path);
	},
	init(cb){
		router.cb = cb;
		if(typeof window === 'undefined' || router.isInit) return;
		router.isInit = 1;
		window.addEventListener('hashchange',()=> router.cb && router.cb()) ;
	}
},{
	get(tg,k){
		const hash = (typeof window !== 'undefined' && window.location.hash || '').split("#")[1] || '';
		const path = hash.split('?')[0] || '';
		if(k === 'path') return path ? path : (router.path = '/');
		if(k === 'fullPath') return hash;
		if(k === 'query') return base.params.formatUrlSearch(hash);
		
		return tg[k]
	},
	set(tg,k,v){
		tg[k] = v;
		const hash = (typeof window !== 'undefined' && window.location.hash || '').split("#")[1] || '';
		if(k === 'path') {
			window.location.hash = base.params.formatObjToUrlSearch({},v)
			router.cb();
		}
		if(k === 'query') {
			window.location.hash = base.params.formatObjToUrlSearch(v,router.path)
			router.cb();
		}
			
		
		return true;
	}
	
})

export default router;