 import java.util.*;

public class U1_AA_Ej18_Pablo {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        int numeroHormigas,numeroAranas,numeroCochinillas,totalPatas;
      
        System.out.print("Número de hormigas capturadas: ");
        numeroHormigas = teclado.nextInt();

        System.out.print("Número de arañas capturadas: ");
        numeroAranas = teclado.nextInt();

        System.out.print("Número de cochinillas capturadas: ");
        numeroCochinillas = teclado.nextInt();

        totalPatas = (numeroHormigas * 6) + (numeroAranas * 8) + (numeroCochinillas * 14);

        System.out.println("El número total de patas es: " + totalPatas + " patas");

        teclado.close();

    }
}

