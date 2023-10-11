import java.util.*;

public class U2_AR_Ej14_Pablo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita al usuario la fecha en formato día, mes y año
        System.out.print("Introduce el día (1-31): ");
        int dia = scanner.nextInt();
        System.out.print("Introduce el mes (1-12): ");
        int mes = scanner.nextInt();
        System.out.print("Introduce el año: ");
        int anio = scanner.nextInt();

        // Validar que la fecha ingresada sea válida
        if (esFechaValida(dia, mes, anio)) {
            // Calcula la fecha del día siguiente
            int nuevoDia, nuevoMes, nuevoAnio;

            if (dia < diasEnMes(mes, anio)) {
                nuevoDia = dia + 1;
                nuevoMes = mes;
                nuevoAnio = anio;
            } else {
                nuevoDia = 1;
                if (mes < 12) {
                    nuevoMes = mes + 1;
                    nuevoAnio = anio;
                } else {
                    nuevoMes = 1;
                    nuevoAnio = anio + 1;
                }
            }

            System.out.println("La fecha del día siguiente es: " + nuevoDia + "/" + nuevoMes + "/" + nuevoAnio);
        } else {
            System.out.println("La fecha ingresada no es válida.");
        }
        
        scanner.close();
    }

    // Función para determinar si una fecha es válida
    public static boolean esFechaValida(int dia, int mes, int anio) {
        if (anio < 0 || mes < 1 || mes > 12 || dia < 1 || dia > diasEnMes(mes, anio)) {
            return false;
        }
        return true;
    }

    // Función para obtener la cantidad de días en un mes específico
    public static int diasEnMes(int mes, int anio) {
        int[] diasPorMes = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        if (mes == 2 && esBisiesto(anio)) {
            return 29;
        } else {
            return diasPorMes[mes];
        }
    }

    // Función para determinar si un año es bisiesto
    public static boolean esBisiesto(int anio) {
        return (anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0);
    }
}
