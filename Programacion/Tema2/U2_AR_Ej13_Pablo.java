import java.util.Scanner;

public class U2_AR_Ej13_Pablo {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Introduce la hora (formato HH:MM:SS): ");
        String horaOrigen = teclado.nextLine();

        // Dividir la entrada en horas, minutos y segundos
        String[] partes = horaOrigen.split(":");
        int horas, minutos, segundos;

        if (partes.length == 3) {
            try {
                horas = Integer.parseInt(partes[0]);
                minutos = Integer.parseInt(partes[1]);
                segundos = Integer.parseInt(partes[2]);

                if (horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59) {
                    segundos++; // Añadir un segundo

                    if (segundos == 60) {
                        segundos = 0;
                        minutos++;

                        if (minutos == 60) {
                            minutos = 0;
                            horas++;

                            if (horas == 24) {
                                horas = 0;
                            }
                        }
                    }

                    // Formatear la nueva hora
                    String nuevaHora = String.format("%02d:%02d:%02d", horas, minutos, segundos);
                    System.out.println("Hora actual: " + horaOrigen);
                    System.out.println("Hora actual + 1 segundo: " + nuevaHora);
                } else {
                    System.out.println("La hora ingresada es inválida.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Formato de hora incorrecto. Utiliza el formato HH:MM:SS");
            }
        } else {
            System.out.println("Formato de hora incorrecto. Utiliza el formato HH:MM:SS");
        }

    }
}
