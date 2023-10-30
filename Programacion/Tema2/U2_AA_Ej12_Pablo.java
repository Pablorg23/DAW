import java.util.Scanner;

public class U2_AA_Ej12_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        
        System.out.print("Introduce los 8 dígitos del número de DNI: ");
        int dniNumero = teclado.nextInt();
        
        int modulo = dniNumero % 23;
        
        char[] letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE".toCharArray();
        
        char letra = letrasDNI[modulo];
        
        System.out.println("La letra de DNI es: " + letra);
        
    }
}
