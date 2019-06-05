// Expresiones Regulares
export const RFC         = /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([a-zA-Z\d]{2})([A\d])$/;
export const EMAIL       = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
export const POSTALCODE  = /(^([0-9]{5,5})|^)$/;
export const TEXT        = /^([a-zA-Z ñáéíóúÑÁÉÍÓÚ .,]{0,100})$/;
export const NUMBER      = /^([0-9])*$/;
export const TEXT_NUMBER = /^[a-z ñáéíóúÑÁÉÍÓÚ A-Z0-9 .,]*$/;
export const FORMAT_DATE = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
