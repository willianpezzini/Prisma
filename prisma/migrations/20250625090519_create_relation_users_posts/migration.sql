-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
