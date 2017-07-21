var i18n = jQuery.extend({}, i18n || {}, {
    dcmvcal: {
        dateformat: {
            "fulldaykey": "ddMMyyyy",
            "fulldayshow": "d L yyyy",
            "fulldayvalue": "d/M/yyyy", 
            "Md": "W d/M",
            "nDaysView": "d/M",
            "listViewDate": "d L yyyy",
            "Md3": "d L",
            "separator": "/",
            "year_index": 2,
            "month_index": 1,
            "day_index": 0,
            "day": "d",
            "sun2": "Do",
            "mon2": "Lu",
            "tue2": "Ma",
            "wed2": "Mi",
            "thu2": "Ju",
            "fri2": "Vi",
            "sat2": "Sa",
            "sun": "Dom",
            "mon": "Lun",
            "tue": "Mar",
            "wed": "Mie",
            "thu": "Jue",
            "fri": "Vie",
            "sat": "Sab",
            "sunday": "Domingo",
            "monday": "Lunes",
            "tuesday": "Martes",
            "wednesday": "Miércoles",
            "thursday": "Jueves",
            "friday": "Viernes",
            "saturday": "Sábado",
            "jan": "Ene",
            "feb": "Feb",
            "mar": "Mar",
            "apr": "Abr",
            "may": "May",
            "jun": "Jun",
            "jul": "Jul",
            "aug": "Ago",
            "sep": "Sep",
            "oct": "Oct",
            "nov": "Nov",
            "dec": "Dic",
            "l_jan": "Enero",
            "l_feb": "Febrero",
            "l_mar": "Marzo",
            "l_apr": "Abril",
            "l_may": "Mayo",
            "l_jun": "Junio",
            "l_jul": "Julio",
            "l_aug": "Agosto",
            "l_sep": "Septiembre",
            "l_oct": "Octubre",
            "l_nov": "Noviembre",
            "l_dec": "Diciembre"
        },
        "no_implemented": "No implementado aun",
        "to_date_view": "Click para ver la fecha actual",
        "i_undefined": "Indefinido",
        "allday_event": "Evento de todo el dia",
        "repeat_event": "Repetir evento",
        "time": "Hora",
        "event": "Evento",
        "location": "Ubicación",
        "participant": "Participante",
        "get_data_exception": "Error cargando datos",
        "new_event": "Nuevo evento",
        "confirm_delete_event": "Confirma que desea borrar este evento? ",
        "confrim_delete_event_or_all": "Desea borrar todos las repeticiones de este evento o solo este evento? \r\nClic [OK / Aceptar] para borrar solo este evento, clic [Cancel / Cancelar] para borrar todos los eventos.",
        "data_format_error": "Error de formato de datos! ",
        "invalid_title": "El título del evento no puede ser vacío o contener ($<>)",
        "view_no_ready": "La vista no esta lista aun",
        "example": "Ej., Evento en habitacion 107",
        "content": "Que",
        "create_event": "Crear evento",
        "update_detail": "Editar detalles",
        "click_to_detail": "Ver detalles",
        "i_delete": "Borrar",
        "i_save": "Guardar",
        "i_close": "Cerrar",
        "day_plural": "días",
        "others": "Otros",
        "item": "",
        "loading_data":"Cargando datos...",
        "request_processed":"El pedido esta siendo procesado ...",
        "success":"Exitoso!",
        "are_you_sure_delete":"Está seguro que desea borrar este evento",
        "ok":"Aceptar",
        "cancel":"Cancelar",
        "manage_the_calendar":"Administrar el Calendario",
        "error_occurs":"Han ocurrido errores",
        "color":"Color",
        "invalid_date_format":"Formato de fecha invalido",
        "invalid_time_format":"Formato de hora invalido",
        "_simbol_not_allowed":"$<> no estan permitidos",
        "subject":"Asunto",
        "time":"Fecha",
        "to":"A",
        "all_day_event":"Evento de todo el día",
        "location":"Ubicación",
        "remark":"Descripción",
        "click_to_create_new_event":"Click para crear nuevo Evento",
        "new_event":"Nuevo Evento",
        "click_to_back_to_today":"Click para ir al día de hoy",
        "today":"Hoy",
        "sday":"Día",
        "week":"Semana",
        "month":"Mes",
        "ndays":"Días",
        "list":"Lista",
        "nmonth":"Año",
        "refresh_view":"Recargar vista",
        "refresh":"Recargar",
        "prev":"Ant",
        "next":"Sig",
        "loading":"Cargando",
        "error_overlapping":"Este evento se sobrepone con otro",
        "sorry_could_not_load_your_data":"No se ha podido cargar sus datos, por favor pruebe nuevamente",
        "first":"Primero",
        "second":"Segundo",
        "third":"Tercero",
        "fourth":"Cuarto",
        "last":"último",
        "repeat":"Repetir: ",
        "edit":"Editar",
        "edit_recurring_event":"Editar evento recurrente",
        "would_you_like_to_change_only_this_event_all_events_in_the_series_or_this_and_all_following_events_in_the_series":"¿Quiere cambiar sólo este evento, todos los eventos, o este y los siguientes de esta serie?",
        "only_this_event":"Sólo este evento",
        "all_other_events_in_the_series_will_remain_the_same":"El resto de eventos de esta serie se quedarán como están.",
        "following_events":"Próximos eventos",
        "this_and_all_the_following_events_will_be_changed":"Este y  los siguientes eventos serán modificados.",
        "any_changes_to_future_events_will_be_lost":"Any changes to future events will be lost.",
        "all_events":"Todos los eventos",
        "all_events_in_the_series_will_be_changed":"Todos los eventos de esta serie serán modificados.",
        "any_changes_made_to_other_events_will_be_kept":"Cualquier otro cambio realizado a otros eventos no será modificado.",
        "cancel_this_change":"Cancelar este cambio",
        "delete_recurring_event":"Borrar evento recurrente",
        "would_you_like_to_delete_only_this_event_all_events_in_the_series_or_this_and_all_future_events_in_the_series":"¿Quieres borrar sólo este evento, toda la serie, o sólo este y los siguientes de esta serie?",
        "only_this_instance":"Sólo este evento",
        "all_other_events_in_the_series_will_remain":"El resto de los eventos no serán modificados.",
        "all_following":"Este y los siguientes",
        "this_and_all_the_following_events_will_be_deleted":"Este y los siguientes eventos serán borrados.",
        "all_events_in_the_series":"Todos los eventos",
        "all_events_in_the_series_will_be_deleted":"Todos los eventos de esta serie serán eliminados.",
        "repeats":"Repetir",
        "daily":"Diariamente",
        "every_weekday_monday_to_friday":"A diario (Lunes a Viernes)",
        "every_monday_wednesday_and_friday":"Cada Viernes, Miércoles y Viernes",
        "every_tuesday_and_thursday":"Cada Martes y Jueves",
        "weekly":"Semanalmente",
        "monthly":"Mensualmente",
        "yearly":"Anualmente",
        "repeat_every":"Repetir cada:",
        "weeks":"semanas",
        "repeat_on":"Repetir cada:",
        "repeat_by":"Repetir por:",
        "day_of_the_month":"día del mes",
        "day_of_the_week":"día de la semana",
        "starts_on":"Empieza el:",
        "ends":"Acaba:",
        "never":" Nunca",
        "after":"Después",
        "occurrences":"repeticiones",
        "summary":"Resumen:",
        "every":"Cada",
        "weekly_on_weekdays":"Semanalmente entre semana",
        "weekly_on_monday_wednesday_friday":"Semanalmente los Lunes, Miércoles y Viernes",
        "weekly_on_tuesday_thursday":"Semanalmente los Martes y Jueves",
        "on":"el",
        "on_day":"en el día",
        "on_the":"en los",
        "months":"meses",
        "annually":"Anualmente",
        "years":"años",
        "once":"Una vez",
        "times":"veces",
        "readmore":"ver más",
        "readmore_less":"menos",
        "readmore":"ver más",
        "readmore_less":"menos",
        "reminder_to":"Avisar a",
        "reminder_before":"",
        "reminder_days":"días",
        "reminder_hours":"horas",
        "reminder_minutes":"minutos antes.",
        "until":"hasta"
    }
});
