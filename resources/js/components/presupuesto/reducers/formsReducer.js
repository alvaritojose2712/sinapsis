const defaultState = {
    data:[],
    form:{},
    selectItem:null,
    fields: {
		partidas:{
            nombre: "Partidas presupuestarias",
			fields:[
				{ name:"codigo", type:"text", placeholder: "Código de la partida", label:"Código de la partida", keypress:(e)=>{
                    // e.preventDefault()
                } },
				{ name:"partida", type:"text", placeholder: "Nombre de la partida", label:"Nombre de la partida" },
				{ name:"descripcion", type:"text", placeholder: "Descripción de la partida", label:"Descripción de la partida" },
				// { name:"select", label:"Es select", isSelect:true, options:[ { label:"Si", value:1 } ] },
			],
            traducciones: {
                codigo: "Código",
                partida: "Partida",
                descripcion:"Descripción",
                created_at: "Fecha de creación",
                updated_at: "Fecha de actualización",
            },
			uri:"/presupuesto/partidas/",
            primary: "codigo",
		},
        AccionesProyectos:{
            nombre: "Acciones y/o Proyectos",
            fields:[
                { name:"nombre", type:"text", placeholder: "Nombre de la acción y/o proyecto", label:"Nombre de la acción y/o proyecto" },
                { name:"tipo", label:"Tipo", isSelect:true, options:{
                        optionsListUri:"",
                        optionsList: [ 
                            { label:"Acción", value:"Acción" }, 
                            { label:"Proyecto", value:"Proyecto" } 
                        ],
                        label:null,
                        value:null,

                    }, 
                },
                { name:"descripcion", type:"text", placeholder: "Descripción", label:"Descripción" },
                { name:"fecha", type:"date", placeholder: "Fecha", label:"Fecha" },
            ],
            traducciones: {
                nombre: "Nombre",
                tipo: "Tipo",
                descripcion:"Descripción",
                fecha:"Fecha",
                created_at: "Fecha de creación",
                updated_at: "Fecha de actualización",
            },
            uri:"/presupuesto/acciones_proyectos/",
            primary: "id",
        },

        AccionesEspecificas:{
            nombre: "Acciones específicas",
            fields:[
                { name:"nombre", type:"text", placeholder: "Nombre de la acción específica", label:"Nombre de la acción específica" },
                { name:"descripcion", type:"text", placeholder: "Descripción", label:"Descripción" },
                { name:"fecha", type:"date", placeholder: "Fecha", label:"Fecha" },
                { name:"acciones_proyectos_id", label:"Acción y/o proyecto asociado ", isSelect:true, options: {
                        optionsList: "",
                        optionsListUri:"/presupuesto/acciones_proyectos/",
                        value:"id",
                        label:['id',"nombre"],

                    }, 
                },
            ],
            traducciones: {
                nombre: "Nombre",
                descripcion: "Descripción",
                fecha: "Fecha",
                acciones_proyectos_id: "Acción y/o proyecto asociado",
                created_at: "Fecha de creación",
                updated_at: "Fecha de actualización",
            },
            uri:"/presupuesto/acciones_especificas/",
            primary: "id",
        },
        PresupuestoOrdinario:{
            nombre: "Presupuesto Ordinario",
            fields:[
                { name:"denominacion", type:"text", placeholder: "Denominación", label:"Denominación" },
                { name:"monto", type:"text", placeholder: "Monto", label:"Monto"},
                { name:"partida", label:"Código de la partida", isSelect:true, options: {
                        optionsList: "",
                        optionsListUri:"/presupuesto/partidas/",
                        value:"codigo",
                        label:['codigo',"partida"],

                    }, 
                },
                { name:"ae", label:"Acción específica", isSelect:true, options: {
                        optionsList: "",
                        optionsListUri:"/presupuesto/acciones_especificas/",
                        value:"id",
                        label:['id',"nombre"],

                    }, 
                },
                { name:"fecha", type:"date", placeholder: "Fecha", label:"Fecha" },
            ],
            traducciones: {
                denominacion: "Denominación",
                partida: "Partida",
                fecha: "Fecha",
                ae: "Acción específica",
                created_at: "Fecha de creación",
                updated_at: "Fecha de actualización",
            },
            uri:"/presupuesto/presupuesto_ordinario/",
            primary: "id",
        },
        MovimientosPresupuestarios:{
            nombre: "Movimientos presupuestarios",
            fields:[
                { name:"movimiento", type:"text", placeholder: "Monto", label:"Monto"},
                { name:"descripcion", type:"text", placeholder: "Descripción", label:"Descripción" },
                { name:"fecha", type:"date", placeholder: "Fecha", label:"Fecha"},
                { name:"referencia", label:"Presupuesto ordinario", isSelect:true, options: {
                        optionsList: "",
                        optionsListUri:"/presupuesto/presupuesto_ordinario/",
                        value:"id",
                        label:['id',"denominacion"],

                    }, 
                },
                { name:"credito_adicional", label:"Crédito adicional", isSelect:true, options: {
                        optionsList: "",
                        optionsListUri:"/presupuesto/credito_adicional/",
                        value:"id",
                        label:['id',"descripcion"],

                    }, 
                },
            ],
            traducciones: {
                movimiento: "Monto",
                descripcion: "Descripción",
                fecha:"Fecha",
                referencia:"Presupuesto ordinario",
                credito_adicional: "Crédito adicional",
                created_at: "Fecha de creación",
                updated_at: "Fecha de actualización",
            },
            uri:"/presupuesto/movimientos_presupuestarios/",
            primary: "id",
        },
        CreditoAdicional:{
            nombre: "Créditos adicionales",
			fields:[
				{ name:"descripcion", type:"text", placeholder: "Descripción", label:"Descripción"},
				{ name:"monto", type:"text", placeholder: "Monto", label:"Monto" },
				{ name:"fecha", type:"date", placeholder: "Fecha", label:"Fecha" },
			],
            traducciones: {
                descripcion: "Descripción",
                monto: "Monto",
                fecha:"Fecha",
                created_at: "Fecha de creación",
                updated_at: "Fecha de actualización",
            },
			uri:"/presupuesto/credito_adicional/",
            primary: "id",
		},
	},
	selectModel:null,
};

const formReducer = (state = defaultState, {type,payload}) => {
    switch (type) {
        case "GET_DATA":
            return {
                ...state,
                data:payload,
            };
        case "ON_CHANGE":
            return {
                ...state,
                form:{...state.form,[payload.name]:payload.value}
            };
        case "SELECT_ITEM":
            return {
                ...state,
                selectItem:payload
            };
        case "SELECT_MODEL":
            return {
                ...state,
                selectModel:payload
            };
        case "MODO_EDIT":
            return {
                ...state,
                form:{...state.data[state.selectItem]}
            };
        case "INITIAL_FORM":
            return {
                ...state,
                form:{}
            };
        case "ADD_OPTIONS_LIST":
        let copy = {...state.fields}
        copy[payload.modelId].fields[payload.fieldId].options.optionsList = payload.options()
            return {
                ...state,
                fields:copy
            };

        default:
            return state;
    }
};

export default formReducer;
