package se.maokei.locpin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import se.maokei.locpin.model.DBFile;
import se.maokei.locpin.repository.DBFileRepository;

import java.io.FileNotFoundException;

@Service
public class DBFileService {
    @Autowired
    protected DBFileRepository dbFileRepository;

    public void saveFile(MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            if(fileName.contains("..")) {
                throw new Exception("Bad characters in filename");
            }
            DBFile dbFile = new DBFile(fileName, file.getContentType(), file.getBytes());
            dbFileRepository.save(dbFile);
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }

    public DBFile getFile(String fileId) throws FileNotFoundException {
        return dbFileRepository.findById(fileId)
                .orElseThrow(() -> new FileNotFoundException("Unable to find file with id: " + fileId));
    }
}
