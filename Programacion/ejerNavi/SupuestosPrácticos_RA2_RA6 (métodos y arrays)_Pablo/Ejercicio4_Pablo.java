import java.util.*;

public class Ejercicio4_Pablo {

    static int[] ventas = new int[5];
    static int[] rangoSalarios = new int[10]; // 10 rangos de salarios, incluyendo el último
    final static Scanner teclado = new Scanner(System.in);

    public static void main(String[] args) {

        for (int i = 0; i < ventas.length; i++) {
            int ventasSemanales;

            do {
                System.out.println("Ingrese las ventas semanales del vendedor " + (i + 1) + ":");
                ventasSemanales = teclado.nextInt();
            } while (ventasSemanales < 0);

            calcularSalario(ventasSemanales);
        }

        // Imprimir la cantidad de vendedores en cada rango de salarios
        System.out.println("Rango de Salario\t\tCantidad de Vendedores");
        for (int i = 0; i < rangoSalarios.length - 2; i++) {
            int rangoInferior = i * 100 + 200;
            int rangoSuperior = (i + 1) * 100 + 199;
            System.out.print(rangoInferior + " - " + rangoSuperior + "\t\t\t\t");
            System.out.println(rangoSalarios[i]);
        }

        System.out.print("1000 en adelante\t\t\t");
        System.out.println(rangoSalarios[rangoSalarios.length - 1]);
    }

    public static void calcularSalario(int ventasSemanales) {
        int salario = 200 + (int) (0.09 * ventasSemanales); // 200€ + 9% de las ventas
        asignarRangoSalario(salario);
    }

    public static void asignarRangoSalario(int salario) {
        int indiceRango = salario / 100 - 2;
        if (indiceRango >= 0 && indiceRango < rangoSalarios.length) {
            rangoSalarios[indiceRango]++;
        } else {
            rangoSalarios[rangoSalarios.length - 1]++; // Salarios de +1000
        }
    }
}




/*
    200€ +9% de las ventas de la semana

    ejemplo 5000€ en una semana recibira 
    200€+ el 9% de 5000 un total de 650



    meto lo que cobra a la semana le calculo el 9% +200€ y eso decide el rango

    
*/