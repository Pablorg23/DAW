import java.util.Scanner;

public class U2_AR_Ej12_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        
        System.out.print("Ingrese el día: ");
        int dia = teclado.nextInt();
        
        System.out.print("Ingrese el mes: ");
        int mes = teclado.nextInt();
        
        System.out.print("Ingrese el año: ");
        int año = teclado.nextInt();
        
        if (esFechaValida(dia, mes, año)) {
            System.out.println("La fecha ingresada es válida.");
        } else {
            System.out.println("La fecha ingresada no es válida.");
        }
        
    }
    
    public static boolean esFechaValida(int dia, int mes, int año) {
        if (mes < 1 || mes > 12) {
            return false; // El mes debe estar entre 1 y 12.
        }
        
        if (dia < 1 || dia > obtenerDiasEnMes(mes)) {
            return false; // El día debe estar dentro del rango válido para el mes.
        }
        
        return true;
    }
    
    public static int obtenerDiasEnMes(int mes) {
        switch (mes) {
            case 2:
                return 28;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            default:
                return 31;
        }
    }
}
