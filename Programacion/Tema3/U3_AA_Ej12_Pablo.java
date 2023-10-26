import java.util.*;

public class U3_AA_Ej12_Pablo {
    public static void main(String args[]) {
        Scanner teclado = new Scanner(System.in);
        int base = 2, decimal = 0, binario = 0, resto = 0;

        System.out.println("Dime un numero en binario");
        binario = teclado.nextInt();
        int originalBinario = binario; // Mantén una copia del número binario original

        System.out.print("El numero " + originalBinario + " en decimal es: ");

        int potencia = 0; // Esta variable se utiliza para rastrear la potencia de 2

        while (binario != 0) {
            resto = binario % 10; // Obtén el dígito más a la derecha del número binario
            decimal += resto * Math.pow(base, potencia); // Convierte y suma al valor decimal
            binario /= 10; // Elimina el dígito más a la derecha
            potencia++; // Incrementa la potencia de 2
        }

        System.out.println(decimal);
    }
}
