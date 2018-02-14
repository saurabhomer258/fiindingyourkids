// If you have PHP you can set the post values like this
var postState = '';
var postCountry = '';

// State table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var state = '\
United States:Alabama:Alabama|\
United States:Alaska:Alaska|\
United States:American Samoa:American Samoa|\
United States:Arizona:Arizona|\
United States:Arkansas:Arkansas|\
United States:California:California|\
United States:Colorado:Colorado|\
United States:Connecticut:Connecticut|\
United States:D.C.:D.C.|\
United States:Delaware:Delaware|\
United States:Florida:Florida|\
United States:Micronesia:Micronesia|\
United States:Georgia:Georgia|\
United States:Guam:Guam|\
United States:Hawaii:Hawaii|\
United States:Idaho:Idaho|\
United States:Illinois:Illinois|\
United States:Indiana:Indiana|\
United States:Iowa:Iowa|\
United States:Kansas:Kansas|\
United States:Kentucky:Kentucky|\
United States:Louisiana:Louisiana|\
United States:Maine:Maine|\
United States:Marianas:Marianas|\
United States:Maryland:Maryland|\
United States:Massachusetts:Massachusetts|\
United States:Marshall Islands:Marshall Islands|\
United States:Michigan:Michigan|\
United States:Minnesota:Minnesota|\
United States:Mississippi:Mississippi|\
United States:Missouri:Missouri|\
United States:Montana:Montana|\
United States:Nebraska:Nebraska|\
United States:Nevada:Nevada|\
United States:New Hampshire:New Hampshire|\
United States:New Jersey:New Jersey|\
United States:New Mexico:New Mexico|\
United States:New York:New York|\
United States:North Carolina:North Carolina|\
United States:North Dakota:North Dakota|\
United States:Ohio:Ohio|\
United States:Oklahoma:Oklahoma|\
United States:Oregon:Oregon|\
United States:Pennsylvania:Pennsylvania|\
United States:Puerto Rico:Puerto Rico|\
United States:Palau:Palau|\
United States:Rhode Island:Rhode Island|\
United States:South Carolina:South Carolina|\
United States:South Dakota:South Dakota|\
United States:Tennessee:Tennessee|\
United States:Texas:Texas|\
United States:Utah:Utah|\
United States:Virginia:Virginia|\
United States:Virgin Islands:Virgin Islands|\
United States:Vermont:Vermont|\
United States:Washington:Washington|\
United States:Wisconsin:Wisconsin|\
United States:West Virginia:West Virginia|\
United States:Wyoming:Wyoming|\
United States:Military Americas:Military Americas|\
United States:Military Europe/ME/Canada:Military Europe/ME/Canada|\
United States:Military Pacific:Military Pacific|\
Canada:Alberta:Alberta|\
Canada:Manitoba:Manitoba|\
Canada:British Columbia:British Columbia|\
Canada:Manitoba:Manitoba|\
Canada:New Brunswick:New Brunswick|\
Canada:Newfoundland and Labrador:Newfoundland and Labrador|\
Canada:Northwest Territories:Northwest Territories|\
Canada:Nova Scotia:Nova Scotia|\
Canada:Nunavut:Nunavut|\
Canada:Ontario:Ontario|\
Canada:Prince Edward Island:Prince Edward Island|\
Canada:Quebec:Quebec|\
Canada:Saskatchewan:Saskatchewan|\
Canada:Yukon Territory:Yukon Territory|\
Australia:Ashmore and Cartier Islands:Ashmore and Cartier Islands|\
Australia:Australian Antarctic Territory:Australian Antarctic Territory|\
Australia:Australian Capital Territory:Australian Capital Territory|\
Australia:Christmas Island:Christmas Island|\
Australia:Cocos (Keeling) Islands:Cocos (Keeling) Islands|\
Australia:Coral Sea Islands:Coral Sea Islands|\
Australia:Heard Island and McDonald Islands:Heard Island and McDonald Islands|\
Australia:Jervis Bay Territory:Jervis Bay Territory|\
Australia:New South Wales:New South Wales|\
Australia:Norfolk Island:Norfolk Island|\
Australia:Northern Territory:Northern Territory|\
Australia:New South Wales:New South Wales|\
Australia:Queensland:Queensland|\
Australia:South Australia:South Australia|\
Australia:Tasmania:Tasmania|\
Australia:Victoria:Victoria|\
Australia:Western Australia:Western Australia|\
Brazil:Acre:Acre|\
Brazil:Alagoas:Alagoas|\
Brazil:Amapa:Amapa|\
Brazil:Amazonas:Amazonas|\
Brazil:Baia:Baia|\
Brazil:Ceara:Ceara|\
Brazil:Distrito Federal:Distrito Federal|\
Brazil:Espirito Santo:Espirito Santo|\
Brazil:Fernando de Noronha:Fernando de Noronha|\
Brazil:Goias:Goias|\
Brazil:Maranhao:Maranhao|\
Brazil:Mato Grosso do Sul:Mato Grosso do Sul|\
Brazil:Mato Grosso:Mato Grosso|\
Brazil:Minas Gerais:Minas Gerais|\
Brazil:Para:Para|\
Brazil:Paraiba:Paraiba|\
Brazil:Parana:Parana|\
Brazil:Pernambuco:Pernambuco|\
Brazil:Piaui:Piaui|\
Brazil:Rio de Janeiro:Rio de Janeiro|\
Brazil:Rio Grande do Norte:Rio Grande do Norte|\
Brazil:Rio Grande do Sul:Rio Grande do Sul|\
Brazil:Rondonia:Rondonia|\
Brazil:Roraima:Roraima|\
Brazil:Santa Catarina:Santa Catarina|\
Brazil:Sao Paulo:Sao Paulo|\
Brazil:Sergipe:Sergipe|\
Brazil:Tocatins:Tocatins|\
Netherlands:Drente:Drente|\
Netherlands:Flevoland:Flevoland|\
Netherlands:Friesland:Friesland|\
Netherlands:Gelderland:Gelderland|\
Netherlands:Groningen:Groningen|\
Netherlands:Limburg:Limburg|\
Netherlands:Noord Brabant:Noord Brabant|\
Netherlands:Noord Holland:Noord Holland|\
Netherlands:Overijssel:Overijssel|\
Netherlands:South Holland:South Holland|\
Netherlands:Utrecht:Utrecht|\
Netherlands:Zeeland:Zeeland|\
Netherlands:Zuid Holland:Zuid Holland|\
United Kingdom:Avon:Avon|\
United Kingdom:Bedfordshire:Bedfordshire|\
United Kingdom:Berkshire:Berkshire|\
United Kingdom:Buckinghamshire:Buckinghamshire|\
United Kingdom:Cambridgeshire:Cambridgeshire|\
United Kingdom:Cheshire:Cheshire|\
United Kingdom:Cleveland:Cleveland|\
United Kingdom:Cornwall:Cornwall|\
United Kingdom:Cumbria:Cumbria|\
United Kingdom:Derbyshire:Derbyshire|\
United Kingdom:Devon:Devon|\
United Kingdom:Dorset:Dorset|\
United Kingdom:Durham:Durham|\
United Kingdom:Essex:Essex|\
United Kingdom:Gloucestershire:Gloucestershire|\
United Kingdom:Greater London:Greater London|\
United Kingdom:Greater Manchester:Greater Manchester|\
United Kingdom:Hampshire:Hampshire|\
United Kingdom:Hereford & Worcestershire:Hereford & Worcestershire|\
United Kingdom:Hertfordshire:Hertfordshire|\
United Kingdom:Humberside:Humberside|\
United Kingdom:Isle of Man:Isle of Man|\
United Kingdom:Isle of Wight:Isle of Wight|\
United Kingdom:Kent:Kent|\
United Kingdom:Lancashire:Lancashire|\
United Kingdom:Leicestershire:Leicestershire|\
United Kingdom:Lincolnshire:Lincolnshire|\
United Kingdom:Merseyside:Merseyside|\
United Kingdom:Norfolk:Norfolk|\
United Kingdom:Northamptonshire:Northamptonshire|\
United Kingdom:Northumberland:Northumberland|\
United Kingdom:Nottinghamshire:Nottinghamshire|\
United Kingdom:Oxfordshire:Oxfordshire|\
United Kingdom:Shropshire:Shropshire|\
United Kingdom:Somerset:Somerset|\
United Kingdom:Staffordshire:Staffordshire|\
United Kingdom:Suffolk:Suffolk|\
United Kingdom:Surrey:Surrey|\
United Kingdom:Sussex:Sussex|\
United Kingdom:Warwickshire:Warwickshire|\
United Kingdom:West Midlands:West Midlands|\
United Kingdom:Wiltshire:Wiltshire|\
United Kingdom:Yorkshire:Yorkshire|\
Ireland (Eire):County Antrim:County Antrim|\
Ireland (Eire):County Armagh:County Armagh|\
Ireland (Eire):County Down:County Down|\
Ireland (Eire):County Fermanagh:County Fermanagh|\
Ireland (Eire):County Londonderry:County Londonderry|\
Ireland (Eire):County Tyrone:County Tyrone|\
Ireland (Eire):County Cavan:County Cavan|\
Ireland (Eire):County Donegal:County Donegal|\
Ireland (Eire):County Monaghan:County Monaghan|\
Ireland (Eire):County Dublin:County Dublin|\
Ireland (Eire):County Carlow:County Carlow|\
Ireland (Eire):County Kildare:County Kildare|\
Ireland (Eire):County Kilkenny:County Kilkenny|\
Ireland (Eire):County Laois:County Laois|\
Ireland (Eire):County Longford:County Longford|\
Ireland (Eire):County Louth:County Louth|\
Ireland (Eire):County Meath:County Meath|\
Ireland (Eire):County Offaly:County Offaly|\
Ireland (Eire):County Westmeath:County Westmeath|\
Ireland (Eire):County Wexford:County Wexford|\
Ireland (Eire):County Wicklow:County Wicklow|\
Ireland (Eire):County Galway:County Galway|\
Ireland (Eire):County Mayo:County Mayo|\
Ireland (Eire):County Leitrim:County Leitrim|\
Ireland (Eire):County Roscommon:County Roscommon|\
Ireland (Eire):County Sligo:County Sligo|\
Ireland (Eire):County Clare:County Clare|\
Ireland (Eire):County Cork:County Cork|\
Ireland (Eire):County Kerry:County Kerry|\
Ireland (Eire):County Limerick:County Limerick|\
Ireland (Eire):County Tipperary:County Tipperary|\
Ireland (Eire):County Waterford:County Waterford|\
India:Andaman and Nicobar:Andaman and Nicobar|\
India:Andaman and Nicobar Islands:Andaman and Nicobar Islands|\
India:Andhra Pradesh:Andhra Pradesh|\
India:Arunachal Pradesh:Arunachal Pradesh|\
India:Assam:Assam|\
India:Bihar:Bihar|\
India:Chandigarh:Chandigarh|\
India:Chhattisgarh:Chhattisgarh|\
India:Dadra and N. Haveli:Dadra and N. Haveli|\
India:Daman and Diu:Daman and Diu|\
India:Delhi:Delhi|\
India:Goa:Goa|\
India:Gujarat:Gujarat|\
India:Haryana:Haryana|\
India:Himachal Pradesh:Himachal Pradesh|\
India:Jammu and Kashmir:Jammu and Kashmir|\
India:Jarkhand:Jarkhand|\
India:Karnataka:Karnataka|\
India:Kerala:Kerala|\
India:Lakshadweep:Lakshadweep|\
India:Laccadive Islands:Laccadive Islands|\
India:Madhya Pradesh:Madhya Pradesh|\
India:Maharashtra:Maharashtra|\
India:Manipur:Manipur|\
India:Meghalaya:Meghalaya|\
India:Mizoram:Mizoram|\
India:Nagaland:Nagaland|\
India:Orissa:Orissa|\
India:Pondicherry:Pondicherry|\
India:Punjab:Punjab|\
India:Rajasthan:Rajasthan|\
India:Sikkim:Sikkim|\
India:Tamil Nadu:Tamil Nadu|\
India:Telangana:Telangana|\
India:Tripura:Tripura|\
India:Uttar Pradesh:Uttar Pradesh|\
India:Uttarakhand:Uttarakhand|\
India:West Bengal:West Bengal|\
Pakistan:Azad Kashmir:Azad Kashmir|\
Pakistan:Baluchistan:Baluchistan|\
Pakistan:Fed. Tribal Areas:Fed. Tribal Areas|\
Pakistan:Gilgit–Baltistan:Gilgit–Baltistan|\
Pakistan:Islamabad Capital Territory:Islamabad Capital Territory|\
Pakistan:Khyber Pakhtunkhwa:Khyber Pakhtunkhwa|\
Pakistan:North-West Frontier:North-West Frontier|\
Pakistan:Northern Areas:Northern Areas|\
Pakistan:Punjab:Punjab|\
Pakistan:Sindh:Sindh|\
United Arab Emirates:Abu Dhabi:Abu Dhabi|\
United Arab Emirates:Ajman:Ajman|\
United Arab Emirates:Al Ain:Al Ain|\
United Arab Emirates:Dubai:Dubai|\
United Arab Emirates:Fujairah:Fujairah|\
United Arab Emirates:Ras al-Khaimah:Ras al-Khaimah|\
United Arab Emirates:Sharjah:Sharjah|\
United Arab Emirates:Daba:Daba|\
United Arab Emirates:Hamriyya:Hamriyya|\
United Arab Emirates:Kalba:Kalba|\
United Arab Emirates:Umm al-Qaiwain:Umm al-Qaiwain|\
';

// Country data table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var country = '\
Afghanistan:Afghanistan|\
Albania:Albania|\
Algeria:Algeria|\
American Samoa:American Samoa|\
Andorra:Andorra|\
Angola:Angola|\
Anguilla:Anguilla|\
Antarctica:Antarctica|\
Antigua and Barbuda:Antigua and Barbuda|\
Argentina:Argentina|\
Armenia:Armenia|\
Aruba:Aruba|\
Australia:Australia|\
Austria:Austria|\
Azerbaijan:Azerbaijan|\
Azores:Azores|\
Bahamas:Bahamas|\
Bahrain:Bahrain|\
Bangladesh:Bangladesh|\
Barbados:Barbados|\
Belarus:Belarus|\
Belgium:Belgium|\
Belize:Belize|\
Benin:Benin|\
Bermuda:Bermuda|\
Bhutan:Bhutan|\
Bolivia:Bolivia|\
Bosnia And Herzegowina:Bosnia And Herzegowina|\
Bosnia-Herzegovina:Bosnia-Herzegovina|\
Botswana:Botswana|\
Bouvet Island:Bouvet Island|\
Brazil:Brazil|\
British Indian Ocean Territory:British Indian Ocean Territory|\
British Virgin Islands:British Virgin Islands|\
Brunei Darussalam:Brunei Darussalam|\
Bulgaria:Bulgaria|\
Burkina Faso:Burkina Faso|\
Burundi:Burundi|\
Cambodia:Cambodia|\
Cameroon:Cameroon|\
Canada:Canada|\
Cape Verde:Cape Verde|\
Cayman Islands:Cayman Islands|\
Central African Republic:Central African Republic|\
Chad:Chad|\
Chile:Chile|\
China:China|\
Christmas Island:Christmas Island|\
Cocos (Keeling) Islands:Cocos (Keeling) Islands|\
Colombia:Colombia|\
Comoros:Comoros|\
Congo:Congo|\
Congo, The Democratic Republic O:Congo, The Democratic Republic O|\
Cook Islands:Cook Islands|\
Corsica:Corsica|\
Costa Rica:Costa Rica|\
Cote d` Ivoire (Ivory Coast):Cote d` Ivoire (Ivory Coast)|\
Croatia:Croatia|\
Cuba:Cuba|\
Cyprus:Cyprus|\
Czech Republic:Czech Republic|\
Denmark:Denmark|\
Djibouti:Djibouti|\
Dominica:Dominica|\
Dominican Republic:Dominican Republic|\
East Timor:East Timor|\
Ecuador:Ecuador|\
Egypt:Egypt|\
El Salvador:El Salvador|\
Equatorial Guinea:Equatorial Guinea|\
Eritrea:Eritrea|\
Estonia:Estonia|\
Ethiopia:Ethiopia|\
Falkland Islands (Malvinas):Falkland Islands (Malvinas)|\
Faroe Islands:Faroe Islands|\
Fiji:Fiji|\
Finland:Finland|\
France (Includes Monaco):France (Includes Monaco)|\
France, Metropolitan:France, Metropolitan|\
French Guiana:French Guiana|\
French Polynesia:French Polynesia|\
French Polynesia (Tahiti):French Polynesia (Tahiti)|\
French Southern Territories:French Southern Territories|\
Gabon:Gabon|\
Gambia:Gambia|\
Georgia:Georgia|\
Germany:Germany|\
Ghana:Ghana|\
Gibraltar:Gibraltar|\
Greece:Greece|\
Greenland:Greenland|\
Grenada:Grenada|\
Guadeloupe:Guadeloupe|\
Guam:Guam|\
Guatemala:Guatemala|\
Guinea:Guinea|\
Guinea-Bissau:Guinea-Bissau|\
Guyana:Guyana|\
Haiti:Haiti|\
Heard And Mc Donald Islands:Heard And Mc Donald Islands|\
Holy See (Vatican City State):Holy See (Vatican City State)|\
Honduras:Honduras|\
Hong Kong:Hong Kong|\
Hungary:Hungary|\
Iceland:Iceland|\
India:India|\
Indonesia:Indonesia|\
Iran:Iran|\
Iraq:Iraq|\
Ireland:Ireland|\
Ireland (Eire):Ireland (Eire)|\
Israel:Israel|\
Italy:Italy|\
Jamaica:Jamaica|\
Japan:Japan|\
Jordan:Jordan|\
Kazakhstan:Kazakhstan|\
Kenya:Kenya|\
Kiribati:Kiribati|\
Korea, Democratic People\'S Repub:Korea, Democratic People\'S Repub|\
Kuwait:Kuwait|\
Kyrgyzstan:Kyrgyzstan|\
Laos:Laos|\
Latvia:Latvia|\
Lebanon:Lebanon|\
Lesotho:Lesotho|\
Liberia:Liberia|\
Libya:Libya|\
Liechtenstein:Liechtenstein|\
Lithuania:Lithuania|\
Luxembourg:Luxembourg|\
Macao:Macao|\
Macedonia:Macedonia|\
Madagascar:Madagascar|\
Madeira Islands:Madeira Islands|\
Malawi:Malawi|\
Malaysia:Malaysia|\
Maldives:Maldives|\
Mali:Mali|\
Malta:Malta|\
Marshall Islands:Marshall Islands|\
Martinique:Martinique|\
Mauritania:Mauritania|\
Mauritius:Mauritius|\
Mayotte:Mayotte|\
Mexico:Mexico|\
Micronesia, Federated States Of:Micronesia, Federated States Of|\
Moldova, Republic Of:Moldova, Republic Of|\
Monaco:Monaco|\
Mongolia:Mongolia|\
Montserrat:Montserrat|\
Morocco:Morocco|\
Mozambique:Mozambique|\
Myanmar (Burma):Myanmar (Burma)|\
Namibia:Namibia|\
Nauru:Nauru|\
Nepal:Nepal|\
Netherlands:Netherlands|\
Netherlands Antilles:Netherlands Antilles|\
New Caledonia:New Caledonia|\
New Zealand:New Zealand|\
Nicaragua:Nicaragua|\
Niger:Niger|\
Nigeria:Nigeria|\
Niue:Niue|\
Norfolk Island:Norfolk Island|\
Northern Mariana Islands:Northern Mariana Islands|\
Norway:Norway|\
Oman:Oman|\
Pakistan:Pakistan|\
Palau:Palau|\
Palestinian Territory, Occupied:Palestinian Territory, Occupied|\
Panama:Panama|\
Papua New Guinea:Papua New Guinea|\
Paraguay:Paraguay|\
Peru:Peru|\
Philippines:Philippines|\
Pitcairn:Pitcairn|\
Poland:Poland|\
Portugal:Portugal|\
Puerto Rico:Puerto Rico|\
Qatar:Qatar|\
Reunion:Reunion|\
Romania:Romania|\
Russian Federation:Russian Federation|\
Rwanda:Rwanda|\
Saint Kitts And Nevis:Saint Kitts And Nevis|\
San Marino:San Marino|\
Sao Tome and Principe:Sao Tome and Principe|\
Saudi Arabia:Saudi Arabia|\
Senegal:Senegal|\
Serbia-Montenegro:Serbia-Montenegro|\
Seychelles:Seychelles|\
Sierra Leone:Sierra Leone|\
Singapore:Singapore|\
Slovak Republic:Slovak Republic|\
Slovenia:Slovenia|\
Solomon Islands:Solomon Islands|\
Somalia:Somalia|\
South Africa:South Africa|\
South Georgia And The South Sand:South Georgia And The South Sand|\
South Korea:South Korea|\
Spain:Spain|\
Sri Lanka:Sri Lanka|\
St. Christopher and Nevis:St. Christopher and Nevis|\
St. Helena:St. Helena|\
St. Lucia:St. Lucia|\
St. Pierre and Miquelon:St. Pierre and Miquelon|\
St. Vincent and the Grenadines:St. Vincent and the Grenadines|\
Sudan:Sudan|\
Suriname:Suriname|\
Svalbard And Jan Mayen Islands:Svalbard And Jan Mayen Islands|\
Swaziland:Swaziland|\
Sweden:Sweden|\
Switzerland:Switzerland|\
Syrian Arab Republic:Syrian Arab Republic|\
Taiwan:Taiwan|\
Tajikistan:Tajikistan|\
Tanzania:Tanzania|\
Thailand:Thailand|\
Togo:Togo|\
Tokelau:Tokelau|\
Tonga:Tonga|\
Trinidad and Tobago:Trinidad and Tobago|\
Tristan da Cunha:Tristan da Cunha|\
Tunisia:Tunisia|\
Turkey:Turkey|\
Turkmenistan:Turkmenistan|\
Turks and Caicos Islands:Turks and Caicos Islands|\
Tuvalu:Tuvalu|\
Uganda:Uganda|\
Ukraine:Ukraine|\
United Arab Emirates:United Arab Emirates|\
United Kingdom:United Kingdom|\
Great Britain:Great Britain|\
United States:United States|\
United States Minor Outlying Isl:United States Minor Outlying Isl|\
Uruguay:Uruguay|\
Uzbekistan:Uzbekistan|\
Vanuatu:Vanuatu|\
Vatican City:Vatican City|\
Venezuela:Venezuela|\
Vietnam:Vietnam|\
Virgin Islands (U.S.):Virgin Islands (U.S.)|\
Wallis and Furuna Islands:Wallis and Furuna Islands|\
Western Sahara:Western Sahara|\
Western Samoa:Western Samoa|\
Yemen:Yemen|\
Yugoslavia:Yugoslavia|\
Zaire:Zaire|\
Zambia:Zambia|\
Zimbabwe:Zimbabwe|\
';

function TrimString(sInString) {
    if ( sInString ) {
        sInString = sInString.replace( /^\s+/g, "" );// strip leading
        return sInString.replace( /\s+$/g, "" );// strip trailing
    }
}

// Populates the country selected with the counties from the country list
function populateCountry(defaultCountry) {
    if ( postCountry != '' ) {
        defaultCountry = postCountry;
    }
    var countryLineArray = country.split('|');  // Split into lines
    var selObj = document.getElementById("countrySelect");
    selObj.options[0] = new Option('Select Country',' ');
    selObj.selectedIndex = 0;
    for (var loop = 0; loop < countryLineArray.length; loop++) {
        lineArray = countryLineArray[loop].split(':');
        countryCode  = TrimString(lineArray[0]);
        countryName  = TrimString(lineArray[1]);
        if ( countryCode != '' ) {
            selObj.options[loop + 1] = new Option(countryName, countryCode);
        }
        if ( defaultCountry == countryCode ) {
            selObj.selectedIndex = loop + 1;
        }
    }
}

function populateState(postStateVal) {
    var selObj = document.getElementById('stateSelect');
    var foundState = false;
    // Empty options just in case new drop down is shorter
    if ( selObj.type == 'select-one' ) {
        for (var i = 0; i < selObj.options.length; i++) {
            selObj.options[i] = null;
        }
        selObj.options.length=null;
        selObj.options[0] = new Option('Select State','NA');
        selObj.selectedIndex = 0;
    }
    // Populate the drop down with states from the selected country
    var stateLineArray = state.split("|");  // Split into lines
    var optionCntr = 1;
    for (var loop = 0; loop < stateLineArray.length; loop++) {
        lineArray = stateLineArray[loop].split(":");
        countryCode  = TrimString(lineArray[0]);
        stateCode    = TrimString(lineArray[1]);
        stateName    = TrimString(lineArray[2]);
        if (document.getElementById("countrySelect").value == countryCode && countryCode != '') {
            // If it's a input element, change it to a select
            if ( selObj.type == 'text' ) {
                parentObj = document.getElementById('stateSelect').parentNode;
                parentObj.removeChild(selObj);
                var inputSel = document.createElement("SELECT");
                inputSel.setAttribute("name","state");
                inputSel.setAttribute("class", "form-control selectdiv5");
                inputSel.setAttribute("onchange", "placestateval()");
                inputSel.setAttribute("id", "stateSelect");
                inputSel.setAttribute("attr", postState);
                parentObj.appendChild(inputSel) ;
                selObj = document.getElementById('stateSelect');
                selObj.options[0] = new Option('Select State','NA');
                selObj.selectedIndex = 0;
            }
            if ( stateCode != '' ) {
                selObj.options[optionCntr] = new Option(stateName, stateCode);
            }
            // See if it's selected from a previous post
            if ( stateCode == postState && countryCode == postCountry ) {
                selObj.selectedIndex = optionCntr;
            }
            foundState = true;
            optionCntr++
        }
    }
    // If the country has no states, change the select to a text box
    if ( ! foundState ) {
        parentObj = document.getElementById('stateSelect').parentNode;
        parentObj.removeChild(selObj);
        // Create the Input Field
        var inputEl = document.createElement("INPUT");
        inputEl.setAttribute("id", "stateSelect");
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("class", "form-control txtfeild");
        inputEl.setAttribute("name", "state");
        inputEl.setAttribute("value", postState);
        inputEl.setAttribute("onkeyup", "placestateval()");
        inputEl.setAttribute("placeholder", "State*");
        parentObj.appendChild(inputEl) ;
    }
}

function initCountry(country, postStateVal) {
    populateCountry(country);
    populateState(postStateVal);
}