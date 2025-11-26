import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProfileModal = ({ open, onClose, member }) => {
  if (!member) return null;

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-secondary rounded-xl shadow-xl max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-[#184B24]">
              <h2 className="text-xl font-semibold text-orange">
                {member.name}
              </h2>
              <button 
                onClick={onClose}
                className="text-orange hover:text-black text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* LEFT - IMAGE */}
              <div className="flex gap-6 justify-center md:block">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-44 h-44 rounded-xl object-cover shadow-md"
                />
                <div className="mt-4 text-center md:text-left">
                  <p className="text-green font-semibold text-lg">{member.position}</p>
                </div>
              </div>

              {/* RIGHT - BIO */}
              <div className="md:col-span-2">
                <h3 className="text-orange golant text-[26px] mb-4">Biography</h3>
                
                {member.biography && member.biography.length > 0 ? (
                  member.biography.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    Biography information will be available soon.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
