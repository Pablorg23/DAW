import java.util.*;
public class U1_AA_Ej19_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        double precioEntradaInfantil = 15.50;
        double precioEntradaAdulto = 20.00;
        double importeSinDescuento;
        double importeConDescuento;
        int cantidadInfantiles,cantidadAdultos;

        System.out.print("Número de entradas infantiles: ");
        cantidadInfantiles = teclado.nextInt();

        System.out.print("Número de entradas de adultos: ");
        cantidadAdultos = teclado.nextInt();

        importeSinDescuento = (cantidadInfantiles * precioEntradaInfantil) + (cantidadAdultos * precioEntradaAdulto);

        importeConDescuento = importeSinDescuento;
        
        if (importeSinDescuento >= 100.00) {
            importeConDescuento = importeSinDescuento - (importeSinDescuento * 0.05);
        }

        System.out.println("El importe a cobrar es: " + importeConDescuento + " €");

        teclado.close();
    }
}
