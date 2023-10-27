import java.util.Scanner;

public class U1_AA_Ej11_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Ingrese la base imponible: ");
        double baseImponible = teclado.nextDouble();

        System.out.println("Ingrese el porcentaje de IVA (por ejemplo, 21 para 21%): ");
        double porcentajeIVA = teclado.nextDouble();

        double importeIVA = (baseImponible * porcentajeIVA) / 100;

        double total = baseImponible + importeIVA;

        System.out.println("Importe del IVA: " + importeIVA);
        System.out.println("Total a pagar: " + total);

        teclado.close();

    }
}
