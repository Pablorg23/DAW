import java.util.Scanner;

public class T1_ejercicio11_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        float kgPeras, kgManzanas, auxManzana, auxPeras;
        float precioPera = 1.95f; 
        float precioManzana = 2.35f; 

        System.out.println("Cuantos kilos de manzanas has vendido el primer semestre (los decimales indícalos con un punto)");
        kgManzanas = teclado.nextFloat();

        System.out.println("Cuantos kilos de peras has vendido el primer semestre (los decimales indícalos con un punto)");
        kgPeras = teclado.nextFloat();

        auxManzana = precioManzana * kgManzanas;
        auxPeras = precioPera * kgPeras;

        System.out.println("Cuantos kilos de manzanas has vendido el segundo semestre (los decimales indícalos con un punto)");
        kgManzanas = teclado.nextFloat();

        System.out.println("Cuantos kilos de peras has vendido el segundo semestre (los decimales indícalos con un punto)");
        kgPeras = teclado.nextFloat();

        auxManzana = auxManzana + (kgManzanas * precioManzana);
        auxPeras = auxPeras + (kgPeras * precioPera);

        System.out.println("El dinero total de las manzanas es de " + auxManzana);
        System.out.println("El dinero total de las peras es de " + auxPeras);

        teclado.close();
    }
}
