import java.util.*;

public class Ejercicio7_Pablo {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double[][] ventas = new double[4][5];

        for (int vendedor = 0; vendedor < 4; vendedor++) {
            for (int producto = 0; producto < 5; producto++) {
                System.out.print("Ingrese las ventas del vendedor " + (vendedor + 1) +
                        " para el producto " + (producto + 1) + ": ");
                ventas[vendedor][producto] = scanner.nextDouble();
            }
        }

        System.out.println("\nVentas Totales por Vendedor y Producto:");
        System.out.println("-------------------------------------------------");

        for (int vendedor = 0; vendedor < 4; vendedor++) {
            double totalVendedor = 0.0;

            for (int producto = 0; producto < 5; producto++) {
                totalVendedor += ventas[vendedor][producto];
                System.out.print(ventas[vendedor][producto] + "\t");
            }

            System.out.println("Total Vendedor " + (vendedor + 1) + ": " + totalVendedor);
        }

        System.out.println("-------------------------------------------------");
        System.out.println("Total Producto");

        for (int producto = 0; producto < 5; producto++) {
            double totalProducto = 0.0;

            for (int vendedor = 0; vendedor < 4; vendedor++) {
                totalProducto += ventas[vendedor][producto];
            }

            System.out.print("Producto " + (producto + 1) + ": " + totalProducto + "\t\t");
        }

        System.out.println("\n-------------------------------------------------");
        double totalGeneral = 0.0;

        for (int vendedor = 0; vendedor < 4; vendedor++) {
            for (int producto = 0; producto < 5; producto++) {
                totalGeneral += ventas[vendedor][producto];
            }
        }

        System.out.println("Total General: " + totalGeneral);

        scanner.close();
    }
}
