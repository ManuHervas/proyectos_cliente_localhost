String.prototype.esDNI = function () {
  const regex = /^[0-9]{8}[A-Za-z]$/;

  if (!regex.test(this)) {
    return false;
  }

  const numero = this.slice(0, 8);
  const letra = this.slice(8).toUpperCase();

  const letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";
  const letraCalculada = letrasValidas[numero % 23];

  return letra === letraCalculada;
};

String.prototype.esCadena = function () {
  const regex = /^[a-zA-Z\s]+$/;

  return regex.test(this);
};

String.prototype.esFecha = function () {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

  if (!regex.test(this)) {
    return false;
  }

  const [day, month, year] = this.split("/").map(Number);

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};
