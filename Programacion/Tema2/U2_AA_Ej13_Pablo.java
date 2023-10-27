import java.util.Scanner;
public class U2_AA_Ej13_Pablo {
    
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);
        
        // Solicitar la cantidad diaria de comida
        System.out.print("Introduce la cantidad diaria de comida (en kilos): ");
        double comidaDiaria = teclado.nextDouble();
        
        // Solicitar el número de animales
        System.out.print("Introduce el número de animales: ");
        int numAnimales = teclado.nextInt();
        
        // Solicitar la cantidad de kilos que come cada animal
        System.out.print("Introduce la cantidad de kilos que come cada animal: ");
        double kilosPorAnimal = teclado.nextDouble();
        
        // Calcular la cantidad total de comida necesaria
        double comidaNecesaria = numAnimales * kilosPorAnimal;
        
        // Comprobar si hay suficiente comida
        if (comidaDiaria >= comidaNecesaria) {
            System.out.println("Hay suficiente comida para los animales.");
        } else {
            double racionNecesaria = comidaNecesaria / numAnimales;
            System.out.println("No hay suficiente comida para los animales.");
            System.out.println("Cada animal debe recibir una ración de " + racionNecesaria + " kilos.");
        }
        
    }
}
