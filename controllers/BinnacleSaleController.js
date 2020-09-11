'use strict'

const BinnacleSaleByte = require('../models/BinnacleSaleByte');
const BinnacleSaleByteBefore = require('../models/BinnacleSaleByteBefore');

const Moment = require('moment');
//Obtiene los colaboradores
async function getBinnacleSale(req, res) { 
    let sales = await BinnacleSaleByte.find({
        store_creat:"Guess Oakland"
    }).sort({ date_created: -1 }).limit(50);
    
    return res.json({sales});
}


//Obtiene los colaboradores date_created: { $regex: dateSales },
async function getBinnacleSaleReport(req, res) { 
    const dataStore = [];
    let salesNew = await BinnacleSaleByte.find({
        date_created: { $regex: "2020-08" },
    });

    let salesBefore_2020 = await BinnacleSaleByteBefore.find({
        date_created: { $gte:"2020-01-01T19:02:12.501+00:00", $lt:"2020-08-18T19:02:12.501+00:00" },
    });

    salesNew.map((res) =>{
        let fecha = Moment(res.date_created).format('YYYY-MM-DDT08:00:00.80Z')
        dataStore.push({"fechaCreacion": fecha, 
                        "Dia":Moment(fecha).format('DD'),
                        "Mes":Moment(fecha).format('MM'),
                        "Año":Moment(fecha).format('YYYY'),
                        "tienda": res.store_creat,
                        "ventas": res.sale_daily,
                        "metas": res.daily_goal,
                        "venta_año_anterior": res.year_before_sale,
                        "total_personas": res.people_totals,
                        "total_vendores": res.sales_totals,
                        "manager": res.manager,
                        "fact": res.fact,
                        "diferencia": res.diff,

                        "factura_sistema_de": res.fac_sis_from,
                        "factura_sistema_hasta": res.fac_sis_to,
                        "total_sistema": res.total_sis,

                        "factura_manual_de": res.fac_man_from,
                        "factura_manual_hasta": res.fac_man_to,
                        "total_manual": res.total_man,

                        "nota_credito_de": res.fact_nt_c_f,
                        "nota_credito_hasta": res.fact_nt_c_to,
                        "nota_credito_total": res.fact_nt_c,

                        "total_online": res.total_on,

                        "efectivo_quetzales": res.cash_quetzales,
                        "efectivo_dolares": res.cash_dolares,
                        
                        "credomatic": res.credomatic,
                        "visa": res.visa,
                        "visa_dolares": res.visaDolares,
                        "masterCard": res.masterCard,
                        "crediCuotas": res.credicuotas,
                        "visaCuotas": res.visaCuotas,

                        "factura_send_contra_entrega_desde": res.fact_send_CE_from,
                        "factura_send_contra_entrega_hasta": res.fact_send_CE_to,
                        "factura_send_contra_entrega_total": res.fact_send_CEV,

                        "nota_de_credito": res.note_credit,
                        "ticket_quetzales": res.ticket_quetzales,
                        "missing": res.missing,
                        "cuadre_de_caja": res.box_square,
                        "Numero_de_envio_en_efectivo": res.numb_send_cash_value,
                        "Numero_Life_Miles": res.lifeMilesNum,
                        "Numero_Life_Miles_Valor": res.lifeMilesVa,
                        "Execto_iva": res.extIva,
                        "Loyalty": res.loyalty,
                        "Gasto_Autorizado": res.Authorized_Expenditure_v,
                        "Retiros": res.retreats,
                        "Cashback_valor": res.cashBackVa,
                        "Giftcard": res.giftcard,
                        "Observacion_Metodos": res.obs_method,
                        "Factores_que_afectaron_venta": res.fact
                    })
    })

    salesBefore_2020.map((res) =>{
        let fecha = Moment(res.date_created).format('YYYY-MM-DDT08:00:00.80Z')
        dataStore.push({"fechaCreacion": fecha, 
                        "Dia":Moment(fecha).format('DD'),
                        "Mes":Moment(fecha).format('MM'),
                        "Año":Moment(fecha).format('YYYY'),
                        "tienda": res.store_creat,
                        "ventas": res.sale_daily,
                        "metas": res.daily_goal,
                        "venta_año_anterior": res.year_before_sale,
                        "total_personas": res.people_totals,
                        "total_vendores": res.sales_totals,
                        "manager": res.manager,
                        "fact": res.fact,
                        "diferencia": res.diff,

                        "factura_sistema_de": res.fac_sis_from,
                        "factura_sistema_hasta": res.fac_sis_to,
                        "total_sistema": res.total_sis,

                        "factura_manual_de": res.fac_man_from,
                        "factura_manual_hasta": res.fac_man_to,
                        "total_manual": res.total_man,

                        "nota_credito_de": res.fact_nt_c_f,
                        "nota_credito_hasta": res.fact_nt_c_to,
                        "nota_credito_total": res.fact_nt_c,

                        "total_online": res.total_on,

                        "efectivo_quetzales": res.cash_quetzales,
                        "efectivo_dolares": res.cash_dolares,
                        
                        "credomatic": res.credomatic,
                        "visa": res.visa,
                        "visa_dolares": res.visaDolares,
                        "masterCard": res.masterCard,
                        "crediCuotas": res.credicuotas,
                        "visaCuotas": res.visaCuotas,

                        "factura_send_contra_entrega_desde": res.fact_send_CE_from,
                        "factura_send_contra_entrega_hasta": res.fact_send_CE_to,
                        "factura_send_contra_entrega_total": res.fact_send_CEV,

                        "nota_de_credito": res.note_credit,
                        "ticket_quetzales": res.ticket_quetzales,
                        "missing": res.missing,
                        "cuadre_de_caja": res.box_square,
                        "Numero_de_envio_en_efectivo": res.numb_send_cash_value,
                        "Numero_Life_Miles": res.lifeMilesNum,
                        "Numero_Life_Miles_Valor": res.lifeMilesVa,
                        "Execto_iva": res.extIva,
                        "Loyalty": res.loyalty,
                        "Gasto_Autorizado": res.Authorized_Expenditure_v,
                        "Retiros": res.retreats,
                        "Cashback_valor": res.cashBackVa,
                        "Giftcard": res.giftcard,
                        "Observacion_Metodos": res.obs_method,
                        "Factores_que_afectaron_venta": res.fact
                    })
    })

    return res.json({dataStore});
}

async function getBinnacleSaleReportBefore(req, res) {
    const dataStore = [];
    let dateInic = req.params.id +"-01-01T19:02:12.501+00:00"
    let dateFin = req.params.id +"-12-31T19:02:12.501+00:00"
    console.log(dateInic,dateFin)
    let salesBefore = await BinnacleSaleByteBefore.find({
        date_created: { $gte: dateInic, $lt: dateFin },
    });

    salesBefore.map((res) =>{
        let fecha = Moment(res.date_created).format('YYYY-MM-DDT08:00:00.80Z')
        dataStore.push({"fechaCreacion": fecha, 
                        "Dia":Moment(fecha).format('DD'),
                        "Mes":Moment(fecha).format('MM'),
                        "Año":Moment(fecha).format('YYYY'),
                        "tienda": res.store_creat,
                        "ventas": res.sale_daily,
                        "metas": res.daily_goal,
                        "venta_año_anterior": res.year_before_sale,
                        "total_personas": res.people_totals,
                        "total_vendores": res.sales_totals,
                        "manager": res.manager,
                        "fact": res.fact,
                        "diferencia": res.diff,

                        "factura_sistema_de": res.fac_sis_from,
                        "factura_sistema_hasta": res.fac_sis_to,
                        "total_sistema": res.total_sis,

                        "factura_manual_de": res.fac_man_from,
                        "factura_manual_hasta": res.fac_man_to,
                        "total_manual": res.total_man,

                        "nota_credito_de": res.fact_nt_c_f,
                        "nota_credito_hasta": res.fact_nt_c_to,
                        "nota_credito_total": res.fact_nt_c,

                        "total_online": res.total_on,

                        "efectivo_quetzales": res.cash_quetzales,
                        "efectivo_dolares": res.cash_dolares,
                        
                        "credomatic": res.credomatic,
                        "visa": res.visa,
                        "visa_dolares": res.visaDolares,
                        "masterCard": res.masterCard,
                        "crediCuotas": res.credicuotas,
                        "visaCuotas": res.visaCuotas,

                        "factura_send_contra_entrega_desde": res.fact_send_CE_from,
                        "factura_send_contra_entrega_hasta": res.fact_send_CE_to,
                        "factura_send_contra_entrega_total": res.fact_send_CEV,

                        "nota_de_credito": res.note_credit,
                        "ticket_quetzales": res.ticket_quetzales,
                        "missing": res.missing,
                        "cuadre_de_caja": res.box_square,
                        "Numero_de_envio_en_efectivo": res.numb_send_cash_value,
                        "Numero_Life_Miles": res.lifeMilesNum,
                        "Numero_Life_Miles_Valor": res.lifeMilesVa,
                        "Execto_iva": res.extIva,
                        "Loyalty": res.loyalty,
                        "Gasto_Autorizado": res.Authorized_Expenditure_v,
                        "Retiros": res.retreats,
                        "Cashback_valor": res.cashBackVa,
                        "Giftcard": res.giftcard,
                        "Observacion_Metodos": res.obs_method,
                        "Factores_que_afectaron_venta": res.fact
                    })
    })

    return res.json({dataStore});
}

async function getBinnacleSaleReportTotal(req, res) { 
    const dataStore = [];
    let salesNew = await BinnacleSaleByte.find({
        date_created: { $regex: "2020" }
    },{date_created:1,store_creat:1,sale_daily:1,manager:1,year_before_sale:1});

    let salesBefore_2020 = await BinnacleSaleByteBefore.find({
        date_created: { $gte:"2015-01-01T19:02:12.501+00:00", $lt:"2020-08-18T19:02:12.501+00:00" },
    },{date_created:1,store_creat:1,sale_daily:1,manager:1,year_before_sale:1,daily_goal:1});

    salesNew.map((res) =>{
        let fecha = Moment(res.date_created).format('YYYY-MM-DDT08:00:00.80Z')
        dataStore.push({"fechaCreacion": fecha, 
                        "Dia":Moment(fecha).format('DD'),
                        "Mes":Moment(fecha).format('MM'),
                        "Año":Moment(fecha).format('YYYY'),
                        "tienda": res.store_creat,
                        "ventas": res.sale_daily,
                        "metas": res.daily_goal,
                        "venta_año_anterior": res.year_before_sale,
                        "total_personas": res.people_totals,
                        "total_vendores": res.sales_totals,
                        "manager": res.manager,
                        "fact": res.fact,
                        "diferencia": res.diff
                    })
    })

    salesBefore_2020.map((res) =>{
        let fecha = Moment(res.date_created).format('YYYY-MM-DDT08:00:00.80Z')
        dataStore.push({"fechaCreacion": fecha, 
                        "Dia":Moment(fecha).format('DD'),
                        "Mes":Moment(fecha).format('MM'),
                        "Año":Moment(fecha).format('YYYY'),
                        "tienda": res.store_creat,
                        "ventas": res.sale_daily,
                        "metas": res.daily_goal,
                        "venta_año_anterior": res.year_before_sale,
                        "total_personas": res.people_totals,
                        "total_vendores": res.sales_totals,
                        "manager": res.manager,
                        "fact": res.fact,
                        "diferencia": res.diffy
                    })
    })

    return res.json({dataStore});
}


module.exports = {
    getBinnacleSale,
    getBinnacleSaleReport,
    getBinnacleSaleReportBefore,
    getBinnacleSaleReportTotal
}