// Datos contables extendidos hasta Abril 2025
const csvData = `ID_Transaccion;Fecha;Codigo_Cuenta;Nombre_Cuenta;Tipo_Cuenta_General;Clasificacion_Cuenta;Descripcion_Movimiento;Debe;Haber
1;2021-01-05;10101;Efectivo en Caja;Activo;Activo Corriente;Aporte inicial de capital;75000.00;0.00
2;2021-01-05;30101;Capital Social;Patrimonio;Capital Contribuido;Aporte inicial de capital;0.00;75000.00
3;2021-01-15;40101;Ingresos por Ventas;Ingreso;Ingresos Operativos;Ventas Enero 2021;0.00;12500.00
4;2021-01-15;10101;Efectivo en Caja;Activo;Activo Corriente;Ventas Enero 2021;12500.00;0.00
5;2021-01-20;50101;Costo de Ventas;Gasto;Costo de Bienes Vendidos;CMV Enero 2021;6200.00;0.00
6;2021-01-20;10301;Inventario;Activo;Activo Corriente;CMV Enero 2021;0.00;6200.00
7;2021-02-10;50201;Gasto de Alquiler;Gasto;Gastos Operativos;Alquiler Febrero 2021;1500.00;0.00
8;2021-02-10;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Alquiler Febrero 2021;0.00;1500.00
9;2021-03-05;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Servicios Consultoría Marzo 2021;0.00;8500.00
10;2021-03-05;10201;Cuentas por Cobrar;Activo;Activo Corriente;Servicios Consultoría Marzo 2021;8500.00;0.00
11;2021-04-10;50202;Gasto de Salarios;Gasto;Gastos Operativos;Nómina Abril 2021;10500.00;0.00
12;2021-04-10;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Nómina Abril 2021;0.00;10500.00
13;2021-05-15;10101;Efectivo en Caja;Activo;Activo Corriente;Cobro Cliente Consultoría;6000.00;0.00
14;2021-05-15;10201;Cuentas por Cobrar;Activo;Activo Corriente;Cobro Cliente Consultoría;0.00;6000.00
15;2021-06-20;20101;Cuentas por Pagar;Pasivo;Pasivo Corriente;Compra Mercadería Crédito Junio 2021;0.00;7500.00
16;2021-06-20;10301;Inventario;Activo;Activo Corriente;Compra Mercadería Crédito Junio 2021;7500.00;0.00
17;2021-07-05;40101;Ingresos por Ventas;Ingreso;Ingresos Operativos;Ventas Julio 2021;0.00;14000.00
18;2021-07-05;10101;Efectivo en Caja;Activo;Activo Corriente;Ventas Julio 2021;14000.00;0.00
19;2021-08-10;50203;Gasto de Publicidad;Gasto;Gastos de Ventas;Campaña Verano 2021;2200.00;0.00
20;2021-08-10;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Publicidad Verano 2021;0.00;2200.00
21;2021-09-15;10501;Propiedad, Planta y Equipo;Activo;Activo No Corriente;Compra de Mobiliario;26000.00;0.00
22;2021-09-15;20201;Préstamo Bancario;Pasivo;Pasivo No Corriente;Préstamo para Mobiliario;0.00;26000.00
23;2021-10-20;50301;Gasto por Intereses;Gasto;Gastos Financieros;Intereses Préstamo Octubre 2021;260.00;0.00
24;2021-10-20;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Intereses Octubre 2021;0.00;260.00
25;2021-11-05;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Servicios Mantenimiento Nov 2021;0.00;6500.00
26;2021-11-05;10101;Efectivo en Caja;Activo;Activo Corriente;Cobro Servicios Mantenimiento Nov 2021;6500.00;0.00
27;2021-12-10;50202;Gasto de Salarios;Gasto;Gastos Operativos;Nómina Diciembre 2021 y Aguinaldo;15500.00;0.00
28;2021-12-10;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Nómina Diciembre 2021;0.00;15500.00
29;2021-12-31;50401;Gasto Depreciación;Gasto;Gastos Operativos;Depreciación Anual PPE 2021;2600.00;0.00
30;2021-12-31;10502;Dep. Acum. PPE;Activo;Activo No Corriente (CR);Depreciación Anual PPE 2021;0.00;2600.00
31;2022-01-15;40101;Ingresos por Ventas;Ingreso;Ingresos Operativos;Ventas Enero 2022;0.00;15500.00
32;2022-01-15;10101;Efectivo en Caja;Activo;Activo Corriente;Ventas Enero 2022;15500.00;0.00
33;2022-01-20;50101;Costo de Ventas;Gasto;Costo de Bienes Vendidos;CMV Enero 2022;7700.00;0.00
34;2022-01-20;10301;Inventario;Activo;Activo Corriente;CMV Enero 2022;0.00;7700.00
35;2022-02-10;50201;Gasto de Alquiler;Gasto;Gastos Operativos;Alquiler Febrero 2022;1650.00;0.00
36;2022-02-10;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Alquiler Febrero 2022;0.00;1650.00
37;2022-03-05;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Servicios Consultoría Marzo 2022;0.00;10000.00
38;2022-03-05;10201;Cuentas por Cobrar;Activo;Activo Corriente;Servicios Consultoría Marzo 2022;10000.00;0.00
39;2022-04-10;50202;Gasto de Salarios;Gasto;Gastos Operativos;Nómina Abril 2022;11500.00;0.00
40;2022-04-10;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Nómina Abril 2022;0.00;11500.00
41;2022-05-15;10101;Efectivo en Caja;Activo;Activo Corriente;Cobro Cliente Consultoría;7500.00;0.00
42;2022-05-15;10201;Cuentas por Cobrar;Activo;Activo Corriente;Cobro Cliente Consultoría;0.00;7500.00
43;2022-06-20;20101;Cuentas por Pagar;Pasivo;Pasivo Corriente;Compra Mercadería Crédito Junio 2022;0.00;8200.00
44;2022-06-20;10301;Inventario;Activo;Activo Corriente;Compra Mercadería Crédito Junio 2022;8200.00;0.00
45;2022-07-05;40101;Ingresos por Ventas;Ingreso;Ingresos Operativos;Ventas Julio 2022;0.00;16500.00
46;2022-07-05;10101;Efectivo en Caja;Activo;Activo Corriente;Ventas Julio 2022;16500.00;0.00
47;2022-08-10;50203;Gasto de Publicidad;Gasto;Gastos de Ventas;Campaña Digital 2022;2700.00;0.00
48;2022-08-10;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Publicidad Digital 2022;0.00;2700.00
49;2022-09-15;20201;Préstamo Bancario;Pasivo;Pasivo No Corriente;Amortización Préstamo;5200.00;0.00
50;2022-09-15;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Amortización Préstamo;0.00;5200.00
51;2022-10-20;50301;Gasto por Intereses;Gasto;Gastos Financieros;Intereses Préstamo Octubre 2022;210.00;0.00
52;2022-10-20;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Intereses Octubre 2022;0.00;210.00
53;2022-11-05;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Contrato Anual Soporte Nov 2022;0.00;12500.00
54;2022-11-05;10101;Efectivo en Caja;Activo;Activo Corriente;Cobro Contrato Anual Soporte Nov 2022;12500.00;0.00
55;2022-12-10;50202;Gasto de Salarios;Gasto;Gastos Operativos;Nómina Diciembre 2022 y Aguinaldo;17000.00;0.00
56;2022-12-10;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Nómina Diciembre 2022;0.00;17000.00
57;2022-12-31;50401;Gasto Depreciación;Gasto;Gastos Operativos;Depreciación Anual PPE 2022;2600.00;0.00
58;2022-12-31;10502;Dep. Acum. PPE;Activo;Activo No Corriente (CR);Depreciación Anual PPE 2022;0.00;2600.00
59;2023-01-10;40101;Ingresos por Ventas;Ingreso;Ingresos Operativos;Venta de mercadería Enero 2023;0.00;19000.00
60;2023-01-10;10101;Efectivo en Caja;Activo;Activo Corriente;Venta de mercadería Enero 2023;19000.00;0.00
61;2023-01-12;50101;Costo de Ventas;Gasto;Costo de Bienes Vendidos;Costo de mercadería vendida Enero 2023;9500.00;0.00
62;2023-01-12;10301;Inventario;Activo;Activo Corriente;Costo de mercadería vendida Enero 2023;0.00;9500.00
63;2023-01-15;50201;Gasto de Alquiler;Gasto;Gastos Operativos;Pago alquiler oficina Enero 2023;1850.00;0.00
64;2023-01-15;10101;Efectivo en Caja;Activo;Activo Corriente;Pago alquiler oficina Enero 2023;0.00;1850.00
65;2023-02-20;10201;Cuentas por Cobrar;Activo;Activo Corriente;Venta de servicios a crédito Feb 2023;13000.00;0.00
66;2023-02-20;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Venta de servicios a crédito Feb 2023;0.00;13000.00
67;2023-02-28;50202;Gasto de Salarios;Gasto;Gastos Operativos;Pago de nómina Febrero 2023;13500.00;0.00
68;2023-02-28;10101;Efectivo en Caja;Activo;Activo Corriente;Pago de nómina Febrero 2023;0.00;13500.00
69;2023-03-05;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Servicio de consultoría Marzo 2023;0.00;13500.00
70;2023-03-05;10101;Efectivo en Caja;Activo;Activo Corriente;Servicio de consultoría Marzo 2023;13500.00;0.00
71;2023-03-10;50203;Gasto de Publicidad;Gasto;Gastos de Ventas;Campaña publicitaria Marzo 2023;3200.00;0.00
72;2023-03-10;10101;Efectivo en Caja;Activo;Activo Corriente;Campaña publicitaria Marzo 2023;0.00;3200.00
73;2023-04-15;10501;Propiedad, Planta y Equipo;Activo;Activo No Corriente;Compra de equipo de cómputo;5500.00;0.00
74;2023-04-15;10101;Efectivo en Caja;Activo;Activo Corriente;Compra de equipo de cómputo;0.00;5500.00
75;2023-05-20;20201;Préstamo Bancario;Pasivo;Pasivo No Corriente;Obtención de préstamo bancario;0.00;22000.00
76;2023-05-20;10101;Efectivo en Caja;Activo;Activo Corriente;Obtención de préstamo bancario;22000.00;0.00
77;2023-06-25;50301;Gasto por Intereses;Gasto;Gastos Financieros;Pago de intereses préstamo;160.00;0.00
78;2023-06-25;10101;Efectivo en Caja;Activo;Activo Corriente;Pago de intereses préstamo;0.00;160.00
79;2023-07-10;40101;Ingresos por Ventas;Ingreso;Ingresos Operativos;Ventas Julio 2023;0.00;22500.00
80;2023-07-10;10101;Efectivo en Caja;Activo;Activo Corriente;Ventas Julio 2023;22500.00;0.00
81;2023-07-12;50101;Costo de Ventas;Gasto;Costo de Bienes Vendidos;CMV Julio 2023;11200.00;0.00
82;2023-07-12;10301;Inventario;Activo;Activo Corriente;CMV Julio 2023;0.00;11200.00
83;2023-08-15;50201;Gasto de Alquiler;Gasto;Gastos Operativos;Alquiler Agosto 2023;1900.00;0.00
84;2023-08-15;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Alquiler Agosto 2023;0.00;1900.00
85;2023-09-20;50202;Gasto de Salarios;Gasto;Gastos Operativos;Nómina Septiembre 2023;14500.00;0.00
86;2023-09-20;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Nómina Septiembre 2023;0.00;14500.00
87;2023-10-05;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Consultoría Octubre 2023;0.00;15500.00
88;2023-10-05;10201;Cuentas por Cobrar;Activo;Activo Corriente;Consultoría Octubre 2023;15500.00;0.00
89;2023-11-10;20101;Cuentas por Pagar;Pasivo;Pasivo Corriente;Compra Suministros Oficina Crédito Nov;0.00;600.00
90;2023-11-10;10401;Suministros de Oficina;Activo;Activo Corriente;Compra Suministros Oficina Crédito Nov;600.00;0.00
91;2023-11-15;10101;Efectivo en Caja;Activo;Activo Corriente;Cobro Cliente Consultoría Oct;11000.00;0.00
92;2023-11-15;10201;Cuentas por Cobrar;Activo;Activo Corriente;Cobro Cliente Consultoría Oct;0.00;11000.00
93;2023-12-20;50203;Gasto de Publicidad;Gasto;Gastos de Ventas;Campaña Navidad 2023;3800.00;0.00
94;2023-12-20;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Publicidad Navidad 2023;0.00;3800.00
95;2023-12-28;20201;Préstamo Bancario;Pasivo;Pasivo No Corriente;Amortización Préstamo Dic 2023;6500.00;0.00
96;2023-12-28;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Amortización Préstamo Dic 2023;0.00;6500.00
97;2023-12-29;50301;Gasto por Intereses;Gasto;Gastos Financieros;Intereses Préstamo Dic 2023;130.00;0.00
98;2023-12-29;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Intereses Préstamo Dic 2023;0.00;130.00
99;2023-12-30;50202;Gasto de Salarios;Gasto;Gastos Operativos;Nómina Diciembre 2023 y Aguinaldo;18500.00;0.00
100;2023-12-30;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Nómina Diciembre 2023;0.00;18500.00
101;2023-12-31;50401;Gasto Depreciación;Gasto;Gastos Operativos;Depreciación Anual PPE 2023;3200.00;0.00
102;2023-12-31;10502;Dep. Acum. PPE;Activo;Activo No Corriente (CR);Depreciación Anual PPE 2023;0.00;3200.00
103;2024-01-10;40101;Ingresos por Ventas;Ingreso;Ingresos Operativos;Ventas Enero 2024;0.00;21000.00
104;2024-01-10;10101;Efectivo en Caja;Activo;Activo Corriente;Ventas Enero 2024;21000.00;0.00
105;2024-01-12;50101;Costo de Ventas;Gasto;Costo de Bienes Vendidos;CMV Enero 2024;10500.00;0.00
106;2024-01-12;10301;Inventario;Activo;Activo Corriente;CMV Enero 2024;0.00;10500.00
107;2024-02-15;50201;Gasto de Alquiler;Gasto;Gastos Operativos;Alquiler Febrero 2024;2000.00;0.00
108;2024-02-15;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Alquiler Febrero 2024;0.00;2000.00
109;2024-03-20;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Consultoría Proyecto Alfa Marzo 2024;0.00;18000.00
110;2024-03-20;10201;Cuentas por Cobrar;Activo;Activo Corriente;Consultoría Proyecto Alfa Marzo 2024;18000.00;0.00
111;2024-04-25;50202;Gasto de Salarios;Gasto;Gastos Operativos;Nómina Abril 2024;16000.00;0.00
112;2024-04-25;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Nómina Abril 2024;0.00;16000.00
113;2024-05-10;10101;Efectivo en Caja;Activo;Activo Corriente;Cobro Proyecto Alfa;12000.00;0.00
114;2024-05-10;10201;Cuentas por Cobrar;Activo;Activo Corriente;Cobro Proyecto Alfa;0.00;12000.00
115;2024-06-15;20101;Cuentas por Pagar;Pasivo;Pasivo Corriente;Compra Equipamiento TI Crédito;0.00;9000.00
116;2024-06-15;10501;Propiedad, Planta y Equipo;Activo;Activo No Corriente;Compra Equipamiento TI Crédito;9000.00;0.00
117;2024-07-20;40101;Ingresos por Ventas;Ingreso;Ingresos Operativos;Ventas Julio 2024;0.00;23000.00
118;2024-07-20;10101;Efectivo en Caja;Activo;Activo Corriente;Ventas Julio 2024;23000.00;0.00
119;2024-08-05;50203;Gasto de Publicidad;Gasto;Gastos de Ventas;Campaña Verano Extendido 2024;4000.00;0.00
120;2024-08-05;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Publicidad Verano Extendido 2024;0.00;4000.00
121;2024-09-10;10501;Propiedad, Planta y Equipo;Activo;Activo No Corriente;Adquisición Vehículo Empresa;30000.00;0.00
122;2024-09-10;20201;Préstamo Bancario;Pasivo;Pasivo No Corriente;Préstamo para Vehículo;0.00;30000.00
123;2024-10-15;50301;Gasto por Intereses;Gasto;Gastos Financieros;Intereses Préstamos Octubre 2024;350.00;0.00
124;2024-10-15;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Intereses Octubre 2024;0.00;350.00
125;2024-11-20;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Servicios Desarrollo Web Nov 2024;0.00;12000.00
126;2024-11-20;10101;Efectivo en Caja;Activo;Activo Corriente;Cobro Desarrollo Web Nov 2024;12000.00;0.00
127;2024-12-22;50202;Gasto de Salarios;Gasto;Gastos Operativos;Nómina Diciembre 2024 y Aguinaldo;20000.00;0.00
128;2024-12-22;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Nómina Diciembre 2024;0.00;20000.00
129;2024-12-31;50401;Gasto Depreciación;Gasto;Gastos Operativos;Depreciación Anual PPE 2024;5000.00;0.00
130;2024-12-31;10502;Dep. Acum. PPE;Activo;Activo No Corriente (CR);Depreciación Anual PPE 2024;0.00;5000.00
131;2025-01-10;40101;Ingresos por Ventas;Ingreso;Ingresos Operativos;Ventas Enero 2025;0.00;25000.00
132;2025-01-10;10101;Efectivo en Caja;Activo;Activo Corriente;Ventas Enero 2025;25000.00;0.00
133;2025-01-12;50101;Costo de Ventas;Gasto;Costo de Bienes Vendidos;CMV Enero 2025;12500.00;0.00
134;2025-01-12;10301;Inventario;Activo;Activo Corriente;CMV Enero 2025;0.00;12500.00
135;2025-02-15;50201;Gasto de Alquiler;Gasto;Gastos Operativos;Alquiler Febrero 2025;2200.00;0.00
136;2025-02-15;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Alquiler Febrero 2025;0.00;2200.00
137;2025-03-20;40102;Ingresos por Servicios;Ingreso;Ingresos Operativos;Consultoría Estratégica Marzo 2025;0.00;20000.00
138;2025-03-20;10201;Cuentas por Cobrar;Activo;Activo Corriente;Consultoría Estratégica Marzo 2025;20000.00;0.00
139;2025-04-28;50202;Gasto de Salarios;Gasto;Gastos Operativos;Nómina Abril 2025;17500.00;0.00
140;2025-04-28;10101;Efectivo en Caja;Activo;Activo Corriente;Pago Nómina Abril 2025;0.00;17500.00
141;2025-04-30;10101;Efectivo en Caja;Activo;Activo Corriente;Cobro Consultoría Marzo;15000.00;0.00
142;2025-04-30;10201;Cuentas por Cobrar;Activo;Activo Corriente;Cobro Consultoría Marzo;0.00;15000.00`;
 // --- Variables Globales ---
         let originalData = []; let filteredData = []; let chartInstances = {};
         const mesesNombres = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
         const ROWS_PER_PAGE_TABLE = 100; const SIMULATED_TAX_RATE = 0.25;
 
         // --- Funciones de Utilidad ---
         function formatCurrency(value) { return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value); }
         function getAccountTypeClass(type) { return `type-${type}`; }
         function getValueClassAndEmoji(value, isExpenseOrDebit = false, isNetProfitOrAsset = false) {
             let className = 'value-neutral'; let emoji = '';
             const isPositiveByNature = !isExpenseOrDebit || isNetProfitOrAsset;
 
             if (value > 0) {
                 className = isPositiveByNature ? 'value-positive' : 'value-negative';
                 emoji = isPositiveByNature ? '🔼' : '🔻';
             } else if (value < 0) {
                 className = isPositiveByNature ? 'value-negative' : 'value-positive';
                 emoji = isPositiveByNature ? '🔻' : '🔼';
             }
             // Asignar emoji específico para beneficio/activo, incluso si es cero
             if (isNetProfitOrAsset && !isExpenseOrDebit) { // Asegura que no sea un gasto/debito
                  if (value > 0) emoji = '📈';
                  else if (value < 0) emoji = '📉';
                  else emoji = '➖';
             } else if (value === 0) {
                 emoji = '➖';
             }
             return { className, emoji };
         }
 
         // --- Procesamiento de Datos y Filtros ---
         function parseCSV(data) {
             const lines = data.trim().split('\n'); const headers = lines[0].split(';');
             return lines.slice(1).map(line => {
                 const values = line.split(';'); let entry = {};
                 headers.forEach((header, i) => {
                     const value = values[i];
                     if (header === 'Debe' || header === 'Haber') entry[header] = parseFloat(value) || 0;
                     else if (header === 'ID_Transaccion') entry[header] = parseInt(value) || null;
                     else entry[header] = value;
                 });
                 const dateParts = entry.Fecha.split('-');
                 entry.DateObject = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2])); // Usar UTC para evitar problemas de zona horaria
                 return entry;
             });
         }
         function populateFilters(data) {
             const yearFilter = document.getElementById('filterYear'); const monthFilter = document.getElementById('filterMonth');
             const classificationFilter = document.getElementById('filterClassification');
             const years = [...new Set(data.map(t => t.DateObject.getUTCFullYear()))].sort((a,b) => b-a); // Usar getUTCFullYear
             yearFilter.innerHTML = '<option value="all">Todos</option>'; years.forEach(year => yearFilter.add(new Option(year, year)));
             monthFilter.innerHTML = '<option value="all">Todos</option>'; mesesNombres.forEach((n, i) => monthFilter.add(new Option(n, i + 1)));
             const classifications = [...new Set(data.map(t => t.Clasificacion_Cuenta))].filter(Boolean).sort();
             classificationFilter.innerHTML = '<option value="all">Todas</option>'; classifications.forEach(c => classificationFilter.add(new Option(c, c)));
         }
         function applyFiltersAndRefresh() {
             const selY = document.getElementById('filterYear').value; const selM = document.getElementById('filterMonth').value;
             const selAT = document.getElementById('filterAccountType').value; const selCL = document.getElementById('filterClassification').value;
             filteredData = originalData.filter(t =>
                 ((selY === "all") || (t.DateObject.getUTCFullYear() === parseInt(selY))) && // Usar getUTCFullYear
                 ((selM === "all") || (t.DateObject.getUTCMonth() + 1 === parseInt(selM))) && // Usar getUTCMonth
                 ((selAT === "all") || (t.Tipo_Cuenta_General === selAT)) &&
                 ((selCL === "all") || (t.Clasificacion_Cuenta === selCL))
             );
             refreshDashboard();
         }
 
         // --- Actualización del DOM (KPIs, Resumen, Tablas Financieras) ---
         function popularTablaDiario(data) {
             const tbody = document.getElementById('tablaTransaccionesBody'); tbody.innerHTML = '';
             const dataToShow = data.slice(0, ROWS_PER_PAGE_TABLE);
             dataToShow.forEach(t => {
                 const debeInfo = getValueClassAndEmoji(t.Debe, true, false);
                 const haberInfo = getValueClassAndEmoji(t.Haber, false, false);
                 const row = `<tr class="${getAccountTypeClass(t.Tipo_Cuenta_General)}">
                     <td>${t.ID_Transaccion}</td> <td>${t.Fecha}</td> <td>${t.Nombre_Cuenta}</td>
                     <td>${t.Tipo_Cuenta_General}</td> <td>${t.Clasificacion_Cuenta}</td> <td>${t.Descripcion_Movimiento}</td>
                     <td class="text-right ${debeInfo.className}">${formatCurrency(t.Debe)}<span class="emoji">${debeInfo.emoji}</span></td>
                     <td class="text-right ${haberInfo.className}">${formatCurrency(t.Haber)}<span class="emoji">${haberInfo.emoji}</span></td>
                 </tr>`;
                 tbody.insertAdjacentHTML('beforeend', row);
             });
             document.getElementById('numTransaccionesTabla').textContent = `${data.length} (mostrando ${dataToShow.length})`;
         }
 
         function renderFinancialStatementRow(concept, value, styleClass = '', isTotal = false, isExpenseOrLiability = false, isNetProfitOrAsset = false) {
             const { className, emoji } = getValueClassAndEmoji(value, isExpenseOrLiability, isNetProfitOrAsset);
             const rowClass = isTotal ? 'total-row' : (styleClass || '');
             // Evitar mostrar emoji si el valor es cero y no es una fila de total o subtotal importante
             const displayEmoji = (value !== 0 || isTotal || concept.toLowerCase().includes('neta')) ? `<span class="emoji">${emoji}</span>` : '';
             return `<tr class="${rowClass}"><td>${concept}</td><td class="${className}">${formatCurrency(value)}${displayEmoji}</td></tr>`;
         }
 
         function popularEstadoResultados(data) {
             const tbody = document.getElementById('incomeStatementBody'); tbody.innerHTML = '';
             let ingresosOp = 0, costoVentas = 0, gastosOp = 0, gastosFin = 0, otrosIngresos = 0, otrosGastos = 0;
             data.forEach(t => {
                 if (t.Tipo_Cuenta_General === 'Ingreso') {
                     if (t.Clasificacion_Cuenta === 'Ingresos Operativos') ingresosOp += t.Haber; else otrosIngresos += t.Haber;
                 } else if (t.Tipo_Cuenta_General === 'Gasto') {
                     if (t.Clasificacion_Cuenta === 'Costo de Bienes Vendidos') costoVentas += t.Debe;
                     else if (t.Clasificacion_Cuenta === 'Gastos Operativos' || t.Clasificacion_Cuenta === 'Gastos de Ventas') gastosOp += t.Debe;
                     else if (t.Clasificacion_Cuenta === 'Gastos Financieros') gastosFin += t.Debe;
                     // Incluir explícitamente 'Gasto Depreciación' en otrosGastos si no se mapea a gastosOp
                     else if (t.Nombre_Cuenta === 'Gasto Depreciación') otrosGastos += t.Debe;
                 }
             });
             const utilidadBruta = ingresosOp - costoVentas;
             const utilidadOperativa = utilidadBruta - gastosOp;
             const utilidadAntesImp = utilidadOperativa - gastosFin + otrosIngresos - otrosGastos;
             const impuestos = utilidadAntesImp > 0 ? Math.abs(utilidadAntesImp * SIMULATED_TAX_RATE) : 0;
             const utilidadNeta = utilidadAntesImp - impuestos;
 
             let html = renderFinancialStatementRow('Ingresos Operativos', ingresosOp, '', false, false, true);
             if (costoVentas !== 0) html += renderFinancialStatementRow('(-) Costo de Ventas', costoVentas, '', false, true);
             html += renderFinancialStatementRow('(=) Utilidad Bruta', utilidadBruta, 'subtotal-row', false, false, true);
             if (gastosOp !== 0) html += renderFinancialStatementRow('(-) Gastos Operativos y Ventas', gastosOp, '', false, true);
             html += renderFinancialStatementRow('(=) Utilidad Operativa', utilidadOperativa, 'subtotal-row', false, false, true);
             if (gastosFin !== 0) html += renderFinancialStatementRow('(-) Gastos Financieros', gastosFin, '', false, true);
             if (otrosIngresos !== 0) html += renderFinancialStatementRow('(+) Otros Ingresos', otrosIngresos, '', false, false, true);
             if (otrosGastos !== 0) html += renderFinancialStatementRow('(-) Otros Gastos (ej. Deprec.)', otrosGastos, '', false, true);
             html += renderFinancialStatementRow('(=) Utilidad Antes de Impuestos', utilidadAntesImp, 'subtotal-row', false, false, true);
             if (impuestos !== 0) html += renderFinancialStatementRow('(-) Impuestos (Simulado)', impuestos, '', false, true);
             html += renderFinancialStatementRow('(=) Utilidad Neta del Período', utilidadNeta, '', true, false, true);
             tbody.innerHTML = html;
         }
 
         function popularBalanceGeneral(allTransactions, endDate) {
             const tbody = document.getElementById('balanceSheetBody'); tbody.innerHTML = '';
             document.getElementById('balanceDate').textContent = `al ${endDate.toLocaleDateString('es-ES')}`; // Formato local
             const accounts = {};
             const relevantTransactions = allTransactions.filter(t => t.DateObject <= endDate);
 
             relevantTransactions.forEach(t => {
                 if (!accounts[t.Codigo_Cuenta]) accounts[t.Codigo_Cuenta] = { name: t.Nombre_Cuenta, type: t.Tipo_Cuenta_General, class: t.Clasificacion_Cuenta, balance: 0 };
                 accounts[t.Codigo_Cuenta].balance += (t.Debe - t.Haber);
             });
 
             let actC = 0, actNC = 0, pasC = 0, pasNC = 0, capitalSocial = 0, resultadosAcumulados = 0;
             
             Object.values(accounts).forEach(acc => {
                  if (acc.type === 'Activo') {
                     // Asignación más robusta para corrientes/no corrientes
                     if (acc.class === 'Activo Corriente' || ['Efectivo en Caja', 'Cuentas por Cobrar', 'Inventario', 'Suministros de Oficina'].includes(acc.name)) {
                         actC += acc.balance;
                     } else if (acc.class === 'Activo No Corriente (CR)') { // Depreciación acumulada
                         actNC += acc.balance; // Se suma, ya tiene saldo negativo
                     } else if (acc.class === 'Activo No Corriente' || acc.name.includes('Propiedad')) {
                          actNC += acc.balance;
                     } else { // Por defecto, considerar corriente si no se clasifica
                         actC += acc.balance;
                     }
                 } else if (acc.type === 'Pasivo') {
                     if (acc.class === 'Pasivo Corriente' || acc.name === 'Cuentas por Pagar') pasC -= acc.balance; else pasNC -= acc.balance;
                 } else if (acc.type === 'Patrimonio' && acc.name === 'Capital Social') {
                     capitalSocial -= acc.balance;
                 }
                 // Calcular resultados acumulados de forma separada
             });
 
              relevantTransactions.forEach(t => {
                 if (t.Tipo_Cuenta_General === 'Ingreso') resultadosAcumulados += t.Haber;
                 else if (t.Tipo_Cuenta_General === 'Gasto') resultadosAcumulados -= t.Debe;
             });
 
             const totalAct = actC + actNC;
             const totalPas = pasC + pasNC;
             const totalPat = capitalSocial + resultadosAcumulados; // El patrimonio total incluye el resultado acumulado
             const ajusteCuadre = totalAct - (totalPas + totalPat);
 
             let html = renderFinancialStatementRow('ACTIVOS', '', 'font-weight-bold');
             html += renderFinancialStatementRow('Activos Corrientes', actC, 'subtotal-row', false, false, true);
             html += renderFinancialStatementRow('Activos No Corrientes', actNC, 'subtotal-row', false, false, true);
             html += renderFinancialStatementRow('Total Activos', totalAct, '', true, false, true);
             html += renderFinancialStatementRow('PASIVOS', '', 'font-weight-bold mt-3');
             html += renderFinancialStatementRow('Pasivos Corrientes', pasC, 'subtotal-row', false, true);
             html += renderFinancialStatementRow('Pasivos No Corrientes', pasNC, 'subtotal-row', false, true);
             html += renderFinancialStatementRow('Total Pasivos', totalPas, '', true, true);
             html += renderFinancialStatementRow('PATRIMONIO', '', 'font-weight-bold mt-3');
             html += renderFinancialStatementRow('Capital Social', capitalSocial, '', false, false, true);
             html += renderFinancialStatementRow('Resultados Acumulados', resultadosAcumulados, '', false, false, true);
             if (Math.abs(ajusteCuadre) > 0.01) html += renderFinancialStatementRow('Ajuste por Cuadre (Sim.)', ajusteCuadre);
             html += renderFinancialStatementRow('Total Patrimonio', totalPat + ajusteCuadre, '', true, false, true);
             html += renderFinancialStatementRow('Total Pasivo y Patrimonio', totalPas + totalPat + ajusteCuadre, '', true, false, true);
             tbody.innerHTML = html;
         }
         
         // Función consolidada para calcular y mostrar KPIs
         function calculateAndDisplayKPIs(balanceSourceData, incomeStatementSourceData, balanceEndDate) {
             let kpi_totalIngresos = 0, kpi_totalGastos = 0;
             let kpi_totalActivos = 0, kpi_totalPasivos = 0, kpi_totalPatrimonio = 0;
             const accountBalancesKPI = {};
 
             const relevantBalanceTransactions = balanceSourceData.filter(t => t.DateObject <= balanceEndDate);
             relevantBalanceTransactions.forEach(t => {
                 if (!accountBalancesKPI[t.Codigo_Cuenta]) {
                     accountBalancesKPI[t.Codigo_Cuenta] = { balance: 0, type: t.Tipo_Cuenta_General, name: t.Nombre_Cuenta };
                 }
                 accountBalancesKPI[t.Codigo_Cuenta].balance += (t.Debe - t.Haber);
             });
 
             let kpi_capitalSocial = 0, kpi_resultadosAcumulados = 0;
             Object.values(accountBalancesKPI).forEach(acc => {
                 if (acc.type === 'Activo') kpi_totalActivos += acc.balance;
                 else if (acc.type === 'Pasivo') kpi_totalPasivos -= acc.balance;
                 else if (acc.type === 'Patrimonio' && acc.name === 'Capital Social') kpi_capitalSocial -= acc.balance;
             });
              relevantBalanceTransactions.forEach(t => {
                 if (t.Tipo_Cuenta_General === 'Ingreso') kpi_resultadosAcumulados += t.Haber;
                 else if (t.Tipo_Cuenta_General === 'Gasto') kpi_resultadosAcumulados -= t.Debe;
             });
             kpi_totalPatrimonio = kpi_capitalSocial + kpi_resultadosAcumulados;
 
             incomeStatementSourceData.forEach(t => {
                 if (t.Tipo_Cuenta_General === 'Ingreso') kpi_totalIngresos += t.Haber;
                 else if (t.Tipo_Cuenta_General === 'Gasto') kpi_totalGastos += t.Debe;
             });
             const kpi_beneficioNetoPeriodo = kpi_totalIngresos - kpi_totalGastos;
 
             // Actualizar los elementos del DOM para los KPIs
             document.getElementById('totalIngresos').textContent = formatCurrency(kpi_totalIngresos);
             document.getElementById('totalGastos').textContent = formatCurrency(kpi_totalGastos);
             const beneficioEmoji = kpi_beneficioNetoPeriodo >= 0 ? '😊' : '😟';
             document.getElementById('beneficioNeto').textContent = formatCurrency(kpi_beneficioNetoPeriodo) + ` ${beneficioEmoji}`;
             document.getElementById('totalActivos').textContent = formatCurrency(kpi_totalActivos);
             document.getElementById('totalPasivos').textContent = formatCurrency(kpi_totalPasivos);
             document.getElementById('totalPatrimonio').textContent = formatCurrency(kpi_totalPatrimonio);
 
             const balanceDifference = kpi_totalActivos - (kpi_totalPasivos + kpi_totalPatrimonio);
 
             return {
                 totalIngresos: kpi_totalIngresos, totalGastos: kpi_totalGastos, beneficioNetoPeriodo: kpi_beneficioNetoPeriodo,
                 totalActivos: kpi_totalActivos, totalPasivos: kpi_totalPasivos, totalPatrimonio: kpi_totalPatrimonio,
                 balanceEquationDifference: balanceDifference
             };
         }
 
         // Función modificada para el Resumen Ejecutivo
         function updateExecutiveSummary(kpiData, periodDescription, balanceEquationCheck) {
             const summaryEl = document.getElementById('executiveSummaryText');
             if (!kpiData || kpiData.totalIngresos === undefined) {
                 summaryEl.innerHTML = "<p>Seleccione filtros para generar el resumen detallado.</p>";
                 return;
             }
 
             let html = `<p>Este informe presenta un resumen financiero clave basado en los datos ${periodDescription === 'todo el período histórico' ? 'totales acumulados' : 'del período seleccionado (' + periodDescription + ')'}.</p>`;
 
             html += `<p>Los <strong>Ingresos Totales</strong> ascienden a <span class="highlight highlight-ingreso">${formatCurrency(kpiData.totalIngresos)} 💰</span>, mostrando un desempeño positivo.</p>`;
             html += `<p>Los <strong>Gastos Totales</strong> se sitúan en <span class="highlight highlight-gasto">${formatCurrency(kpiData.totalGastos)} 💸</span>. Es importante monitorear las áreas de mayor gasto.</p>`;
 
             const beneficioNetoEmoji = kpiData.beneficioNetoPeriodo >= 0 ? '😊' : '😟';
             const beneficioNetoTexto = kpiData.beneficioNetoPeriodo >= 0 ? 'indicando rentabilidad' : 'reflejando una pérdida';
             html += `<p>El <strong>Beneficio Neto</strong> ${periodDescription === 'todo el período histórico' ? 'acumulado' : 'del período'} es de <span class="highlight ${kpiData.beneficioNetoPeriodo >= 0 ? 'highlight-beneficio-pos' : 'highlight-beneficio-neg'}">${formatCurrency(kpiData.beneficioNetoPeriodo)} ${beneficioNetoEmoji}</span>, ${beneficioNetoTexto}.</p>`;
 
             html += `<p>En cuanto a la situación patrimonial (basada en datos acumulados hasta la fecha de corte del balance):</p><ul>`;
             html += `<li>Los <strong>Activos Totales</strong> alcanzan los <span class="highlight highlight-activo">${formatCurrency(kpiData.totalActivos)} 🏦</span>, representando los recursos controlados por la empresa.</li>`;
             html += `<li>Los <strong>Pasivos Totales</strong> son de <span class="highlight highlight-pasivo">${formatCurrency(kpiData.totalPasivos)} 🧾</span>, reflejando las obligaciones de la empresa.</li>`;
             html += `<li>El <strong>Patrimonio Total</strong> (Capital + Resultados Acumulados) es de <span class="highlight highlight-patrimonio">${formatCurrency(kpiData.totalPatrimonio)} 🏠</span>.</li>`;
             html += `</ul>`;
 
             if (balanceEquationCheck) {
                 const diff = balanceEquationCheck.diferencia;
                 const diffFormatted = formatCurrency(diff);
                 if (Math.abs(diff) < 0.01) {
                     html += `<p><i class="bi bi-check-circle-fill text-success"></i> La ecuación contable (Activo = Pasivo + Patrimonio Total) se cumple con una diferencia mínima de ${diffFormatted}. Esto valida la integridad de los datos de balance.</p>`;
                 } else {
                     html += `<p><i class="bi bi-exclamation-triangle-fill text-warning"></i> La ecuación contable presenta una diferencia de ${diffFormatted}. Se recomienda revisar los asientos para asegurar el cuadre perfecto.</p>`;
                 }
             }
             summaryEl.innerHTML = html;
         }
 
         function getPeriodDescription() {
             const y = document.getElementById('filterYear').value; const m = document.getElementById('filterMonth').value;
             let desc = "";
             if (m !== "all") desc += mesesNombres[parseInt(m)-1];
             if (y !== "all") desc += (desc ? " de " : "") + y;
 
             if (!desc && m === "all" && y === "all") return "todo el período histórico";
             if (!desc && y !== "all") return `el año ${y}`;
             if (y === "all" && m !== "all") return `todos los meses de ${mesesNombres[parseInt(m)-1]} a través de los años`;
             return desc || "el período seleccionado";
         }
 
         // --- Funciones de Gráficos (sin cambios) ---
         function destroyChart(chartId) { if (chartInstances[chartId]) { chartInstances[chartId].destroy(); delete chartInstances[chartId]; }}
         function getChartFontColor() { return document.body.classList.contains('dark-mode') ? getComputedStyle(document.documentElement).getPropertyValue('--dark-chart-label-color').trim().replace(/'/g, '') : getComputedStyle(document.documentElement).getPropertyValue('--light-chart-label-color').trim().replace(/'/g, ''); }
         const chartDefaultOptions = (fontColor) => ({ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { color: fontColor, callback: value => formatCurrency(value) } }, x: { ticks: { color: fontColor } } }, plugins: { legend: { labels: { color: fontColor, font: {size: 10} } }, tooltip: { callbacks: { label: ctx => `${ctx.dataset.label || ctx.label || ''}: ${formatCurrency(ctx.parsed.y || ctx.parsed)}` }, bodyFont: {size: 10}, titleFont: {size: 12} } } });
         function crearGraficoIngresosGastos(data) { destroyChart('ingresosGastosChart'); const ctx = document.getElementById('ingresosGastosChart').getContext('2d'); const monthlyData = {}; const fontColor = getChartFontColor(); data.forEach(t => { const mY = `${t.DateObject.getUTCFullYear()}-${String(t.DateObject.getUTCMonth() + 1).padStart(2, '0')}`; if (!monthlyData[mY]) monthlyData[mY] = { ingresos: 0, gastos: 0 }; if (t.Tipo_Cuenta_General === 'Ingreso') monthlyData[mY].ingresos += t.Haber; else if (t.Tipo_Cuenta_General === 'Gasto') monthlyData[mY].gastos += t.Debe; }); const sorted = Object.keys(monthlyData).sort(); const labels = sorted.map(k => `${mesesNombres[parseInt(k.split('-')[1])-1]} ${k.split('-')[0].substring(2)}`); const ingresos = sorted.map(k => monthlyData[k].ingresos); const gastos = sorted.map(k => monthlyData[k].gastos); chartInstances['ingresosGastosChart'] = new Chart(ctx, { type: 'bar', data: { labels, datasets: [ { label: 'Ingresos', data: ingresos, backgroundColor: 'rgba(40, 167, 69, 0.7)'}, { label: 'Gastos', data: gastos, backgroundColor: 'rgba(220, 53, 69, 0.7)' } ]}, options: chartDefaultOptions(fontColor) }); }
         function crearGraficoDistribucionGastos(data) { destroyChart('distribucionGastosChart'); const ctx = document.getElementById('distribucionGastosChart').getContext('2d'); const gastosCat = {}; const fontColor = getChartFontColor(); data.filter(t => t.Tipo_Cuenta_General === 'Gasto' && t.Debe > 0).forEach(t => gastosCat[t.Clasificacion_Cuenta || 'Otros'] = (gastosCat[t.Clasificacion_Cuenta || 'Otros'] || 0) + t.Debe); const labels = Object.keys(gastosCat); const valores = Object.values(gastosCat); const bgColors = ['#dc3545','#fd7e14','#ffc107','#28a745','#20c997','#17a2b8','#6f42c1','#007bff','#6c757d','#343a40']; const options = chartDefaultOptions(fontColor); options.plugins.tooltip.callbacks.label = ctx => `${ctx.label}: ${formatCurrency(ctx.parsed)} (${((ctx.parsed / ctx.chart.getDatasetMeta(0).total) * 100).toFixed(1)}%)`; chartInstances['distribucionGastosChart'] = new Chart(ctx, { type: 'doughnut', data: { labels, datasets: [{ data: valores, backgroundColor: labels.map((_, i) => bgColors[i % bgColors.length])}] }, options: options }); }
         function crearGraficoEvolucionBalance(data) { destroyChart('evolucionBalanceChart'); const ctx = document.getElementById('evolucionBalanceChart').getContext('2d'); const fontColor = getChartFontColor(); const quarterly = {}; const accBalances = {}; data.sort((a,b) => a.DateObject - b.DateObject).forEach(t => { if (!accBalances[t.Codigo_Cuenta]) accBalances[t.Codigo_Cuenta] = { b: 0, type: t.Tipo_Cuenta_General, name: t.Nombre_Cuenta }; accBalances[t.Codigo_Cuenta].b += (t.Debe - t.Haber); const pK = `${t.DateObject.getUTCFullYear()}-Q${Math.floor(t.DateObject.getUTCMonth()/3)+1}`; if (!quarterly[pK]) quarterly[pK] = { a: 0, p: 0, pt: 0 }; let cA=0, cP=0, capSoc=0, resAcu=0; const endDateOfQuarter = new Date(Date.UTC(pK.substring(0,4), (parseInt(pK.substring(6)))*3, 0)); Object.entries(accBalances).forEach(([code,acc]) => { if (acc.type === 'Activo') cA += acc.b; else if (acc.type === 'Pasivo') cP -= acc.b; else if (acc.type === 'Patrimonio' && acc.name === 'Capital Social') capSoc -= acc.b;}); const relevantTransactionsForQuarter = data.filter(tx => tx.DateObject <= endDateOfQuarter); relevantTransactionsForQuarter.forEach(tr => {if(tr.Tipo_Cuenta_General === 'Ingreso') resAcu+=tr.Haber; else if (tr.Tipo_Cuenta_General === 'Gasto') resAcu -= tr.Debe;}); cPT = capSoc + resAcu; quarterly[pK] = { a: cA, p: cP, pt: cPT }; }); const labels = Object.keys(quarterly).sort(); const options = chartDefaultOptions(fontColor); options.scales.y.beginAtZero = false; chartInstances['evolucionBalanceChart'] = new Chart(ctx, { type: 'line', data: { labels, datasets: [ { label: 'Activos', data: labels.map(p => quarterly[p].a), borderColor: 'rgba(0, 123, 255, 1)', tension: 0.1 }, { label: 'Pasivos', data: labels.map(p => quarterly[p].p), borderColor: 'rgba(255, 193, 7, 1)', tension: 0.1 }, { label: 'Patrimonio', data: labels.map(p => quarterly[p].pt), borderColor: 'rgba(108, 117, 125, 1)', tension: 0.1 } ]}, options: options }); }
         function crearGraficoComparativaAnual(data) { destroyChart('comparativaAnualChart'); const ctx = document.getElementById('comparativaAnualChart').getContext('2d'); const fontColor = getChartFontColor(); const annual = {}; data.forEach(t => { const y = t.DateObject.getUTCFullYear().toString(); if (!annual[y]) annual[y] = { i: 0, g: 0 }; if (t.Tipo_Cuenta_General === 'Ingreso') annual[y].i += t.Haber; else if (t.Tipo_Cuenta_General === 'Gasto') annual[y].g += t.Debe; }); const labels = Object.keys(annual).sort(); chartInstances['comparativaAnualChart'] = new Chart(ctx, { type: 'bar', data: { labels, datasets: [ { label: 'Ingresos', data: labels.map(y => annual[y].i), backgroundColor: 'rgba(40, 167, 69, 0.7)'}, { label: 'Gastos', data: labels.map(y => annual[y].g), backgroundColor: 'rgba(220, 53, 69, 0.7)' } ]}, options: chartDefaultOptions(fontColor) }); }
         function crearGraficoBalancePatrimonial(kpiData) { destroyChart('balancePatrimonialChart'); if (!kpiData || kpiData.totalActivos === undefined) return; const ctx = document.getElementById('balancePatrimonialChart').getContext('2d'); const fontColor = getChartFontColor(); const options = chartDefaultOptions(fontColor); options.plugins.tooltip.callbacks.label = ctx => `${ctx.label}: ${formatCurrency(ctx.parsed)} (${(ctx.chart.getDatasetMeta(0).total > 0 ? (ctx.parsed / ctx.chart.getDatasetMeta(0).total) * 100 : 0).toFixed(1)}%)`; chartInstances['balancePatrimonialChart'] = new Chart(ctx, { type: 'pie', data: { labels: ['Activos', 'Pasivos', 'Patrimonio'], datasets: [{ data: [Math.max(0, kpiData.totalActivos), Math.max(0, kpiData.totalPasivos), Math.max(0, kpiData.totalPatrimonio)], backgroundColor: ['rgba(0, 123, 255, 0.7)', 'rgba(255, 193, 7, 0.7)', 'rgba(108, 117, 125, 0.7)'] }]}, options: options }); }
         function crearGraficoFlujoEfectivo(data) { destroyChart('flujoEfectivoChart'); const ctx = document.getElementById('flujoEfectivoChart').getContext('2d'); const cashFlowM = {}; const fontColor = getChartFontColor(); data.filter(t => t.Nombre_Cuenta.toLowerCase().includes('efectivo') || t.Nombre_Cuenta.toLowerCase().includes('caja') || t.Nombre_Cuenta.toLowerCase().includes('banco')).forEach(t => { const mY = `${t.DateObject.getUTCFullYear()}-${String(t.DateObject.getUTCMonth()+1).padStart(2,'0')}`; cashFlowM[mY] = (cashFlowM[mY] || 0) + (t.Debe - t.Haber); }); const sortedM = Object.keys(cashFlowM).sort(); const labels = sortedM.map(k => `${mesesNombres[parseInt(k.split('-')[1])-1]} ${k.split('-')[0].substring(2)}`); const options = chartDefaultOptions(fontColor); options.scales.y.beginAtZero = false; chartInstances['flujoEfectivoChart'] = new Chart(ctx, { type: 'line', data: { labels, datasets: [{ label: 'Flujo Neto Mensual', data: sortedM.map(k => cashFlowM[k]), borderColor: 'rgba(23, 162, 184, 1)', backgroundColor: 'rgba(23, 162, 184, 0.2)', fill: true, tension: 0.1 }]}, options: options }); }
 
         // --- Actualización General del Dashboard y Tema ---
         function refreshDashboard() {
             let balanceEndDate;
             const selectedYear = document.getElementById('filterYear').value;
             const selectedMonth = document.getElementById('filterMonth').value;
 
             if (selectedYear !== "all" && selectedMonth !== "all") {
                  balanceEndDate = new Date(Date.UTC(parseInt(selectedYear), parseInt(selectedMonth), 0));
             } else if (selectedYear !== "all") {
                  balanceEndDate = new Date(Date.UTC(parseInt(selectedYear), 11, 31));
             } else {
                 balanceEndDate = originalData.length > 0 ? originalData.reduce((max, t) => t.DateObject > max ? t.DateObject : max, originalData[0].DateObject) : new Date();
             }
 
             // Calcula KPIs y la diferencia del balance, y actualiza los cards
             const kpiData = calculateAndDisplayKPIs(originalData, filteredData, balanceEndDate);
             
             // Actualiza el resumen ejecutivo
             updateExecutiveSummary(kpiData, getPeriodDescription(), { diferencia: kpiData.balanceEquationDifference });
             
             // Popula las tablas
             popularTablaDiario(filteredData);
             popularEstadoResultados(filteredData); 
             popularBalanceGeneral(originalData, balanceEndDate);
 
             // Genera los gráficos
             crearGraficoIngresosGastos(filteredData);
             crearGraficoDistribucionGastos(filteredData);
             crearGraficoEvolucionBalance(originalData);
             crearGraficoComparativaAnual(originalData);
             crearGraficoBalancePatrimonial(kpiData);
             crearGraficoFlujoEfectivo(filteredData);
         }
         function updateAllChartFontColors() {
              const fontColor = getChartFontColor();
              Object.values(chartInstances).forEach(chart => {
                 if (chart && chart.options) { 
                     if(chart.options.plugins && chart.options.plugins.legend) chart.options.plugins.legend.labels.color = fontColor;
                     if(chart.options.scales?.x) chart.options.scales.x.ticks.color = fontColor;
                     if(chart.options.scales?.y) chart.options.scales.y.ticks.color = fontColor;
                     chart.update('none'); 
                 } 
             });
         }
         const themeToggle = document.getElementById('themeToggleCheckbox');
         themeToggle.addEventListener('change', () => { document.body.classList.toggle('dark-mode'); localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light'); updateAllChartFontColors(); });
         function loadTheme() { const STh = localStorage.getItem('theme'); if (STh === 'dark') { document.body.classList.add('dark-mode'); themeToggle.checked = true; } else { document.body.classList.remove('dark-mode'); themeToggle.checked = false; } }
 
         // --- Inicialización ---
         document.addEventListener('DOMContentLoaded', () => {
             console.log("DOM Cargado. Inicializando Dashboard...");
             try {
                 loadTheme(); 
                 originalData = parseCSV(csvData); 
                 console.log(`Datos parseados: ${originalData.length} transacciones.`);
                 populateFilters(originalData);
                 filteredData = [...originalData]; 
                 applyFiltersAndRefresh();
                 document.getElementById('applyFilters').addEventListener('click', applyFiltersAndRefresh);
                 // Ligero retraso para asegurar que los estilos se apliquen antes de leer colores para los gráficos
                  setTimeout(() => {
                     console.log("Actualizando colores de gráficos post-carga.");
                     updateAllChartFontColors();
                  }, 300); // Un delay ligeramente mayor
                  console.log("Dashboard inicializado.");
             } catch (error) {
                 console.error("Error durante la inicialización del dashboard:", error);
                 // Opcional: Mostrar un mensaje de error al usuario en la página
                 document.body.innerHTML = `<div class="alert alert-danger m-5">Error al cargar el dashboard. Por favor, revise la consola (F12) para más detalles.</div>`;
             }
         });
   
