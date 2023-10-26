import java.util.Scanner;

public class U2_AA_Ej19_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        
        System.out.print("Introduce el valor del ángulo en grados: ");
        double grados = teclado.nextDouble();
        
        // Asegurarse de que el ángulo esté en el rango 0-360 grados
        grados = grados % 360;
        if (grados < 0) {
            grados += 360;
        }
        
        // Convertir grados a radianes
        double radianes = Math.toRadians(grados);
        
        System.out.println("El ángulo equivalente en radianes es: " + radianes);
        
        teclado.close(); // Cierra el Scanner cuando ya no se necesita
    }
}
